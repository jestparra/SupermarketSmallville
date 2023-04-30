import { Component, OnInit } from '@angular/core';
import { productos } from 'src/app/modelos/producto.model';
import { ProductosService } from 'src/app/servicios/productos/productos.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentSlide: number = 0;
  maxSlides:number = 3;
  productosDescuento: Array<productos> = [];

  constructor(private ProductosService : ProductosService) { }

  // Ejecutar cambio de slide cada 5 segundos
  ngOnInit(): void {
    setInterval(() => {
      this.currentSlide = this.currentSlide == this.maxSlides? 0 : this.currentSlide+1;
    }, 5000)
    this.GetProductos();
  }

  GetProductos(){
    this.ProductosService.ObtenerProductos().subscribe(resp =>{
      this.productosDescuento = resp.filter(x => x.descuento);
    })
  }
}
