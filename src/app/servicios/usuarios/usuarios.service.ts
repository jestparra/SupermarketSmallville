import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuarios } from 'src/app/modelos/usuario.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private httpClient: HttpClient) { }

  public Login(usuario: Usuarios) {
    return this.httpClient.post<any>(environment.urlProductos+'/api/Usuario/login',usuario)
      .pipe();
  }
}
