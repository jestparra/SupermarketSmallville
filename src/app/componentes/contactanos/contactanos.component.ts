import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  registrar(){
    Swal.fire(
      'Registrar Contacto!',
      'Se ha registrado el contacto correctamente!',
      'success'
    )
  }
}
