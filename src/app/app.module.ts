import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule}from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { AltaDireccionComponent } from './alta-direccion/alta-direccion.component';
import { EditarDireccionComponent } from './editar-direccion/editar-direccion.component';
import { DetalleDireccionComponent } from './detalle-direccion/detalle-direccion.component';
import { AltaAccesorioComponent } from './alta-accesorio/alta-accesorio.component';
import { EditarAccesorioComponent } from './editar-accesorio/editar-accesorio.component';
import { DetalleAccesorioComponent } from './detalle-accesorio/detalle-accesorio.component';
import { ListarDireccionComponent } from './listar-direccion/listar-direccion.component';
import { ListarAccesorioComponent } from './listar-accesorio/listar-accesorio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    AltaDireccionComponent,
    EditarDireccionComponent,
    DetalleDireccionComponent,
    AltaAccesorioComponent,
    EditarAccesorioComponent,
    DetalleAccesorioComponent,
    ListarDireccionComponent,
    ListarAccesorioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
