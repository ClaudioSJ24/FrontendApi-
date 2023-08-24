import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServicioDireccionService } from '../servicio-direccion.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-direccion',
  templateUrl: './editar-direccion.component.html',
  styleUrls: ['./editar-direccion.component.css']
})
export class EditarDireccionComponent {

  //Atributos
  private params:any;
  private id: number = 0;

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
  constructor(private ruta: ActivatedRoute, private servicio: ServicioDireccionService, private router: Router) {


    this.params = this.ruta.params.subscribe(parametros => {

      this.id = parametros["idD"];
      console.log(this.id);
      this.servicio.obtenerDireccion(this.id);
    })
    
  }

  get direccion(){
    return this.servicio.direccion;
  }

  actualizarDireccion(){

    const calle = this.referenciaCalle.nativeElement.value;
    const numero = this.referenciaNumero.nativeElement.value;
    const colonia = this.referenciaColonia.nativeElement.value;
    const ciudad = this.referenciaCiudad.nativeElement.value;
    const estado = this.referenciaEstado.nativeElement.value;
    const cp = this.referenciaCp.nativeElement.value;
    this.servicio.actualizarDir(this.id, calle, numero, colonia, ciudad, estado, cp);
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
