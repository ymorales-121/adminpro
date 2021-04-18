import { Component } from '@angular/core';
import { UsuarioService } from './../../servises/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {

  constructor(private usuarioService: UsuarioService) { }

    logout(){
      this.usuarioService.logout();
    }


}
