import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { DocumentosComponent } from './componentes/documentos/documentos/documentos.component';
import { ContactosComponent } from './componentes/contactos/contactos/contactos.component';
import { HomeComponent } from './componentes/home/home/home.component';
import { TerminosComponent } from './componentes/terminos/terminos/terminos.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros/nosotros.component';
import { CaracteristicasComponent } from './componentes/servicios/caracteristicas/caracteristicas.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentosComponent,
    ContactosComponent,
    HomeComponent,
    TerminosComponent,
    NosotrosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
