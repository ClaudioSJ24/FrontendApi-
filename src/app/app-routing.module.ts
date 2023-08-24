import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarDireccionComponent } from './listar-direccion/listar-direccion.component';
import { EditarDireccionComponent } from './editar-direccion/editar-direccion.component';
import { DetalleDireccionComponent } from './detalle-direccion/detalle-direccion.component';
import { AltaDireccionComponent } from './alta-direccion/alta-direccion.component';

const routes: Routes = [
  {path: 'direcciones/listar', component: ListarDireccionComponent},
  {path: 'direcciones/editar/:idD', component: EditarDireccionComponent},
  {path: 'direcciones/detalle/:idD', component: DetalleDireccionComponent},
  {path: 'direcciones/alta', component: AltaDireccionComponent},
  {path: '', redirectTo: 'direcciones/listar', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
