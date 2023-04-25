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
  // Se realiza la consulta de los prodcutos mediante el consumo a un servicio externo(en este caso a un mocky)
  ObtenerProductos(){
    this.ProductosService.ObtenerProductos().subscribe(resp =>{
      this.productos = resp;
    })
  }

  // Se indica el producto que fue seleccionado y se abre el modal con el uso de Jquery
  OnClickProd(producto: productos){
    this.selectedProd = producto;
    $("#modal").modal('show');
  }
  // Se cierra el modal del detalle de productos
  OnCloseModal(){
    $("#modal").modal('hide');
  }
}
