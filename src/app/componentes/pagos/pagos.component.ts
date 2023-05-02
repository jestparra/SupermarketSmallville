import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  registrar(){
    Swal.fire(
      'Registrar Pago!',
      'Se ha registrado el pago correctamente!',
      'success'
    )
  }

}
