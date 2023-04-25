import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-productos',
  templateUrl: './admin-productos.component.html',
  styleUrls: ['./admin-productos.component.css']
})
export class AdminProductosComponent implements OnInit {
  module: number = 1;
  constructor() { }

  ngOnInit(): void {
  }
  // Metodo encargado de asignar el modulo actual de la crud
  OnChangeModule(value: number){
    this.module = value;
  }
}
