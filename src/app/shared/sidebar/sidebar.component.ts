import { Component, OnInit } from '@angular/core';
import { SidebarService } from './../../servises/sidebar.service';
import { UsuarioService } from './../../servises/usuario.service';
import { Usuario } from './../../models/usuario.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {
  public usuario : Usuario;
  public menuItems: any[];
  constructor(private sidebarService: SidebarService, private usuarioService: UsuarioService) {
    this.menuItems = sidebarService.menu;
    this.usuario = usuarioService.usuario;
   }

  ngOnInit(): void {
  }

}
