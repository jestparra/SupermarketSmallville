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
    return this.httpClient.get<Array<productos>>(environment.urlProductos)
      .pipe();
  }
}
