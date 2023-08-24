import { Component } from '@angular/core';
import { ServicioDireccionService } from '../servicio-direccion.service';

@Component({
  selector: 'app-listar-direccion',
  templateUrl: './listar-direccion.component.html',
  styleUrls: ['./listar-direccion.component.css']
})
export class ListarDireccionComponent {

  /**
   *
   */
  constructor(private servicioD: ServicioDireccionService) {
    
    this.servicioD.obtenerListaDirecciones();
        
  }

  get direcciones(){
    return this.servicioD.direcciones;
  }

  eliminar(id: number){

    this.servicioD.eliminarDireccion(id);
  }

}
