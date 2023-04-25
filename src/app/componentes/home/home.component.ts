import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentSlide: number = 0;
  maxSlides:number = 3;
  constructor() { }

  // Ejecutar cambio de slide cada 5 segundos
  ngOnInit(): void {
    setInterval(() => {
      this.currentSlide = this.currentSlide == this.maxSlides? 0 : this.currentSlide+1;
    }, 5000)
  }

}
