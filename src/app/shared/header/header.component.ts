import { Component } from '@angular/core';
import { UsuarioService } from './../../servises/usuario.service';
import { Usuario } from './../../models/usuario.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {
  public usuario: Usuario;
  constructor(private usuarioService: UsuarioService) {
    this.usuario = usuarioService.usuario;
   }

    logout(){
      this.usuarioService.logout();
    }


}
