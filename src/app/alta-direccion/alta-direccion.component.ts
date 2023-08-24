import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioDireccionService } from '../servicio-direccion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-direccion',
  templateUrl: './alta-direccion.component.html',
  styleUrls: ['./alta-direccion.component.css']
})
export class AltaDireccionComponent {

  //Atributos
  @ViewChild("calle")
  referenciaCalle!: ElementRef;

  @ViewChild("numero")
  referenciaNumero!: ElementRef;

  @ViewChild("colonia")
  referenciaColonia!: ElementRef;

  @ViewChild("ciudad")
  referenciaCiudad!: ElementRef;

  @ViewChild("estado")
  referenciaEstado!: ElementRef;

  @ViewChild("cp")
  referenciaCp!: ElementRef;

  /**
   *
   */
  constructor(private service: ServicioDireccionService, private router: Router) {
    
  }

  guardarDireccion(){

    const calle = this.referenciaCalle.nativeElement.value;
    const numero = this.referenciaNumero.nativeElement.value;
    const colonia = this.referenciaColonia.nativeElement.value;
    const ciudad = this.referenciaCiudad.nativeElement.value;
    const estado = this.referenciaEstado.nativeElement.value;
    const cp = this.referenciaCp.nativeElement.value;
    this.service.guardarDireccion(calle, numero, colonia, ciudad, estado, cp);
    Swal.fire({

        title: "Direccion almacenada correctamente",
        confirmButtonText: "OK"

    }).then((result) =>{

      if(result.isConfirmed){
        this.router.navigate(['direcciones/listar'])
      }

    })

    

  }


}
