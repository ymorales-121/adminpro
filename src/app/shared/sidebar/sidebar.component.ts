import { Component, OnInit } from '@angular/core';
import { SidebarService } from './../../servises/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  constructor(private sidebarService: SidebarService) {
    this.menuItems = sidebarService.menu;
   }

  ngOnInit(): void {
  }

}
