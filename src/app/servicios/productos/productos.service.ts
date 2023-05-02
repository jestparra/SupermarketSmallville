import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productos } from 'src/app/modelos/producto.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor( private httpClient: HttpClient) { }

  public ObtenerProductos() {
    return this.httpClient.get<Array<productos>>(environment.urlProductos+'/api/productos')
      .pipe();
  }

  public RegistrarProductos(productos:productos) {
    return this.httpClient.post(environment.urlProductos+'/api/productos',productos)
      .pipe();
  }

  public ActualizarProductos(productos:productos) {
    return this.httpClient.put(environment.urlProductos+'/api/productos/'+productos._id,productos)
      .pipe();
  }

  public EliminarProductos(productos:productos) {
    return this.httpClient.delete(environment.urlProductos+'/api/productos/'+productos._id)
      .pipe();
  }

  public ObtenerProductosCarrito() {
    return this.httpClient.get<Array<productos>>(environment.urlProductos+'/api/ProductosCarrito')
      .pipe();
  }

  public RegistrarProductosCarrito(productos:productos) {
    return this.httpClient.post(environment.urlProductos+'/api/ProductosCarrito',productos)
      .pipe();
  }

  public ActualizarProductosCarrito(productos:productos) {
    return this.httpClient.put(environment.urlProductos+'/api/ProductosCarrito/'+productos._id,productos)
      .pipe();
  }

  public EliminarProductosCarrito(productos:productos) {
    return this.httpClient.delete(environment.urlProductos+'/api/ProductosCarrito/'+productos._id)
      .pipe();
  }
}
