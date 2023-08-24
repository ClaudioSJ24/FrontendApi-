import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioDireccionService } from '../servicio-direccion.service';

@Component({
  selector: 'app-detalle-direccion',
  templateUrl: './detalle-direccion.component.html',
  styleUrls: ['./detalle-direccion.component.css']
})
export class DetalleDireccionComponent {

  private params: any;
  private id: number = 0;

  /**
   *
   */ 
  constructor(private ruta: ActivatedRoute, private servicioD: ServicioDireccionService) {
    
    this.params = this.ruta.params.subscribe(parametros => {
      this.id = parametros["idD"];
      console.log(this.id);
      this.servicioD.obtenerDireccion(this.id);
    })
    
  }

  get direccion(){
    return this.servicioD.direccion;
  }

}
