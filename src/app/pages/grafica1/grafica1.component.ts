import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
  public labels1: string[] = ['Ventas', 'Compras', 'Egresos'];
  public data1 = [
    [100, 200, 300],
  ];
  
}
