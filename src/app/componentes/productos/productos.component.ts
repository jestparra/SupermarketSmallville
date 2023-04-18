import { Component, OnInit } from '@angular/core';
import { productos } from 'src/app/modelos/producto.model';
import { ProductosService } from 'src/app/servicios/productos/productos.service'
declare var $: any;

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Array<productos> = [];
  selectedProd : productos = new productos;
  constructor(private ProductosService : ProductosService) { }

  ngOnInit(): void {
    this.ObtenerProductos();

  }

  ObtenerProductos(){
    this.ProductosService.ObtenerProductos().subscribe(resp =>{
      this.productos = resp;
    })
  }

  OnClickProd(producto: productos){
    this.selectedProd = producto;
    $("#modal").modal('show');
  }

  OnCloseModal(){
    $("#modal").modal('hide');
  }
}
