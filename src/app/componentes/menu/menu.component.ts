import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  open: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  // Se crea el metodo encargado de indicar si el sidebar izquierdo se encuentra abierto o cerrado
  openNav() {
    this.open = !this.open;
  }
}
