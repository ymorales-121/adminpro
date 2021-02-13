import { Component, OnInit } from '@angular/core';
import { SettingsService } from './../servises/settings.service';

declare function custumInitFunctions();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [],
})
export class PagesComponent implements OnInit {
  constructor(private settingsService: SettingsService) {}

  ngOnInit(): void {
    custumInitFunctions();
  }
}
