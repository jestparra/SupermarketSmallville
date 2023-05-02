import { Component, OnInit } from '@angular/core';
import { productos } from 'src/app/modelos/producto.model';
import { ProductosService } from 'src/app/servicios/productos/productos.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit {
  productos: Array<productos> = [];
  productosCarrito: Array<productos> = [];
  total: number = 0;
  constructor(private ProductosService : ProductosService) { }

  ngOnInit(): void {
    this.ObtenerProductos()
  }

  ObtenerProductos(){
    this.ProductosService.ObtenerProductos().subscribe(resp =>{
      this.productos = resp;
    })
    this.total = 0
    this.ProductosService.ObtenerProductosCarrito().subscribe(resp =>{
      this.productosCarrito = resp.filter(x => x.unidades > 0);
      this.productosCarrito.forEach(total =>{
        this.total += total.precio*total.unidades
      })
    })
  }
  EliminarProd(prod: productos){
    Swal.fire({
      title: 'Seguro que deseas eliminar: '+ prod.nombreProducto+'?',
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.ProductosService.EliminarProductosCarrito(prod).subscribe(resp =>{
          let prodcar = this.productos.find(x=>x._id == prod._id)
          if(prodcar){
            prodcar.unidades += prod.unidades
            this.ProductosService.ActualizarProductos(prodcar).subscribe(resp =>{
              Swal.fire(
                'Eliminar producto!',
                'Se ha eliminado el producto correctamente!',
                'success'
              )
              this.ObtenerProductos()
            })
          }else{
            Swal.fire(
              'Eliminar producto!',
              'Se ha eliminado el producto correctamente!',
              'success'
            )
            this.ObtenerProductos()
          }
        })
      }
    })
  }
}
