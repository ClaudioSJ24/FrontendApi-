import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ServicioDireccionService {

  public direcciones: any[];
  public direccion: any;

  public urlServidor: string = "http://localhost:8080/";

  constructor(private servicio: HttpClient, private router: Router) { 

    this.direcciones = [];
  }

  obtenerListaDirecciones(){
    this.servicio.get(this.urlServidor+"api/direcciones").subscribe((resp: any) => {
      console.log(resp);
      this.direcciones = resp;
      
    });
  }

  guardarDireccion(calle: string, numero: string, colonia: string, ciudad: string, estado: string, cp: string){

    this.servicio.post(this.urlServidor+"api/direcciones", {

      "calle": calle,
      "numero": numero,
      "colonia": colonia,
      "ciudad": ciudad,
      "estado": estado,
      "cp": cp
    },).subscribe((respuesta: any)=>{
      console.log(respuesta);
      Swal.fire({
        title:respuesta.msg,
        confirmButtonText:'ok',
      }).then((result)=>{
        if(result.isConfirmed){
          this.router.navigate(["direcciones/listar"]);
        }
      })
    })
  }

  obtenerDireccion(id: number){

    this.servicio.get(this.urlServidor+"api/direcciones/" + id, {observe:"response"})
    .subscribe((respuesta: any) => {

      this.direccion = respuesta.body;
      console.log(respuesta.body);
    })
  }

  actualizarDir(id: number, calle: string, numero: string, colonia: string, ciudad: string, estado: string, cp: string){

    this.servicio.put(this.urlServidor+"api/direcciones/" + id, {

      "id": id,
      "calle": calle,
      "numero": numero,
      "colonia": colonia,
      "ciudad": ciudad,
      "estado": estado,
      "cp": cp
    },).subscribe((respuesta: any)=>{
      console.log(respuesta);
    })
  }

  eliminarDireccion(id: number){

    //const parametrosPeticion = new HttpParams().set("idD", id);// se pueden agregar mas parametros( HttpParams().set("id", id).set("name", name))
    this.servicio.delete(this.urlServidor + "api/direcciones/"+id)
    .subscribe((respuesta: any) =>{
      console.log(respuesta);
      this.obtenerListaDirecciones();
    });


  }



}
