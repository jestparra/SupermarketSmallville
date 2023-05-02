import { Component, OnInit } from '@angular/core';
import { productos } from 'src/app/modelos/producto.model';
import { ProductosService } from 'src/app/servicios/productos/productos.service'
import Swal from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Array<productos> = [];
  productosCarrito: Array<productos> = [];
  selectedProd : productos = new productos;
  currentCuantity: number;
  cuantity:number;
  constructor(private ProductosService : ProductosService) { }

  ngOnInit(): void {
    this.ObtenerProductos();

  }
  // Se realiza la consulta de los prodcutos mediante el consumo a un servicio externo(en este caso a un mocky)
  ObtenerProductos(){
    this.ProductosService.ObtenerProductos().subscribe(resp =>{
      this.productos = resp.filter(x => x.unidades > 0);
    })
    this.ProductosService.ObtenerProductosCarrito().subscribe(resp =>{
      this.productosCarrito = resp
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

  SaveCarProduct(){
    this.currentCuantity = this.selectedProd.unidades
    if(this.currentCuantity < this.cuantity || !this.cuantity){
      Swal.fire(
        'Añadir al carrito!',
        'No se poseen unidades suficientes!',
        'error'
      )
    }else{
      this.selectedProd.descuento = this.selectedProd.descuento?this.selectedProd.descuento:0;
      let prodcar = this.productosCarrito.find(x=>x._id == this.selectedProd._id)
      if(prodcar){
        this.selectedProd.unidades = this.cuantity + +prodcar.unidades
        this.ProductosService.ActualizarProductosCarrito(this.selectedProd).subscribe(resp =>{
          this.selectedProd.unidades = this.currentCuantity - this.cuantity
          this.updateProductQty()
        })
      }else{
        this.selectedProd.unidades = this.cuantity
        this.ProductosService.RegistrarProductosCarrito(this.selectedProd).subscribe(resp =>{
          this.selectedProd.unidades = this.currentCuantity - this.cuantity
          this.updateProductQty()
        })
      }

    }
  }

  updateProductQty(){
    this.ProductosService.ActualizarProductos(this.selectedProd).subscribe(resp =>{
      Swal.fire(
        'Registrar producto!',
        'Se ha añadido el producto correctamente!',
        'success'
      )
      this. currentCuantity = 0
      this.cuantity = 0
      this.ObtenerProductos()
    })
  }
}
