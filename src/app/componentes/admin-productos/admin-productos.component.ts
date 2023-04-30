import { Component, OnInit } from '@angular/core';
import { productos } from 'src/app/modelos/producto.model';
import { ProductosService } from 'src/app/servicios/productos/productos.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-productos',
  templateUrl: './admin-productos.component.html',
  styleUrls: ['./admin-productos.component.css']
})
export class AdminProductosComponent implements OnInit {
  currentProductos: Array<productos> = [];
  module: number = 2;
  producto: productos = new productos();
  productos: Array<productos> = [];
  filter: string;
  update: boolean;
  constructor(private ProductosService : ProductosService) { }

  ngOnInit(): void {
    this.GetProductos();
  }
  // Metodo encargado de asignar el modulo actual de la crud
  OnChangeModule(value: number){
    this.module = value;
  }

  GetProductos(){
    this.ProductosService.ObtenerProductos().subscribe(resp =>{
      this.productos = resp;
      this.currentProductos = resp;
    })
  }

  uploadFile(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList) {
      this.producto.imagenes = fileList[0].name
    }
  }

  InsertProducto(){
    if(this.producto.nombreProducto,this.producto.imagenes,this.producto.precio,this.producto.descripcion,this.producto.unidades){
      this.ProductosService.RegistrarProductos(this.producto).subscribe(resp =>{
        Swal.fire(
          'Registrar producto!',
          'Se ha registrado el producto correctamente!',
          'success'
        )
        this.GetProductos();
      })
    }else{
      Swal.fire(
        'Registrar producto!',
        'Se deben llenar los campos obligatorios!',
        'warning'
      )
    }
  }

  UpdateProducto(){
    if(this.producto.nombreProducto,this.producto.imagenes,this.producto.precio,this.producto.descripcion,this.producto.unidades){
      this.ProductosService.ActualizarProductos(this.producto).subscribe(resp =>{
        Swal.fire(
          'Actualizar producto!',
          'Se ha actualizado el producto correctamente!',
          'success'
        )
        this.GetProductos();
        this.clearproductos();
        this.OnChangeModule(2);
      })
    }else{
      Swal.fire(
        'Actualizar producto!',
        'Se deben llenar los campos obligatorios!',
        'warning'
      )
    }
  }

  DeleteProduct(producto: productos){
    Swal.fire({
      title: 'Seguro que deseas eliminar: '+ producto.nombreProducto+'?',
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.ProductosService.EliminarProductos(producto).subscribe(resp =>{
          Swal.fire(
            'Eliminar producto!',
            'Se ha eliminado el producto correctamente!',
            'success'
          )
          this.GetProductos();
          this.OnChangeModule(2);
        })
      }
    })
  }
  filterChange(){
    this.currentProductos = this.productos.filter(x => x.nombreProducto.toLowerCase().includes(this.filter))
  }

  clearproductos(){
    this.producto = new productos();
    this.update = false;
  }

  SelectProduct(producto: productos){
    this.producto = producto;
    this.update = true;
    this.OnChangeModule(1);
  }
}
