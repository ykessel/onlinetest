import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './privado/sidebar/sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import { SeccionesComponent } from './privado/secciones/secciones.component';
import { CaracteristicasComponent } from './privado/caracteristicas/caracteristicas.component';
import { MetodosComponent } from './privado/metodos/metodos.component';
import { ServiciosComponent } from './privado/servicios/servicios.component';
import { DocumentosComponent } from './privado/documentos/documentos.component';
import { UsuariosComponent } from './privado/usuarios/usuarios.component';
import { IdiomasComponent } from './privado/idiomas/idiomas.component';
import { LoginComponent } from './privado/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SeccionesComponent,
    CaracteristicasComponent,
    MetodosComponent,
    ServiciosComponent,
    DocumentosComponent,
    UsuariosComponent,
    IdiomasComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
