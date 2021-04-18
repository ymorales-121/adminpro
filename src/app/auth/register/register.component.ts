import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from './../../servises/usuario.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls:['./register.component.css']
})
export class RegisterComponent {
  public formSubmitted = false;
  public registerForm = this.fb.group({
    nombre:['Eduardo',[Validators.required,Validators.minLength(3)]],
    email:['test100@gmail.com', [Validators.required, Validators.email]],
    password:['12345', Validators.required],
    password2:['12345', Validators.required],
    terminos:[false, Validators.required],
  },{
    validators: this.passwordsIguales('password','password2')
  });

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router: Router) { }


    crearUsuario(){
      this.formSubmitted = true;
      if (this.registerForm.invalid) {
        return;
      }
      this.usuarioService.crearUsuario(this.registerForm.value)
        .subscribe(resp=>{
          this.router.navigateByUrl('/');
        },(err) => {
          Swal.fire('Error', err.error.msg,'error');
        });
    }
    campoNoValido(nombre: string): boolean{

      if(this.registerForm.get(nombre).invalid && this.formSubmitted){
        return true;
      }else{
        return false;
      }
    }
    aceptaTerminos(){
      return !this.registerForm.get('terminos').value && this.formSubmitted;
    }

    contrasenasValidas(){
      const pass = this.registerForm.get('password').value;
      const pass2 = this.registerForm.get('password2').value;
      if ((pass !== pass2) && this.formSubmitted) {
        return true;
      }else{
        return false;
      }
    }
    passwordsIguales(pass1:string,pass2:string){

      return(formGroup: FormGroup)=>{
        const pass1Control = formGroup.get(pass1);
        const pass2Control = formGroup.get(pass2);
        if(pass1Control.value === pass2Control.value){
          pass2Control.setErrors(null);
        }else{
          pass2Control.setErrors({noEsIgual: true});
        }
      }
    }
}
