import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/modelos/usuario.model';
import { UsuariosService } from '../../servicios/usuarios/usuarios.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuarios = new Usuarios();

  constructor(private usuariosService: UsuariosService,public router: Router) { }

  ngOnInit(): void {
  }

  Login(){
    this.usuariosService.Login(this.usuario).subscribe(resp =>{
      if(resp.msg == 'Error credenciales'){
        Swal.fire(
          'Login!',
          'Usuario o contraseña erroneos!',
          'error'
        )
      }else{
        this.router.navigate(['/menu/home']);
      }
    })
  }
}
