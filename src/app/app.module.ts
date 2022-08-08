import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

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
import { ServiciosComponent } from './componentes/servicios/servicios/servicios.component';
import { FooterComponent } from './componentes/shared/footer/footer.component';

//Material Modules
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatExpansionModule} from '@angular/material/expansion';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';


//3rd Party Libray
import { OwlModule } from 'ngx-owl-carousel';

@NgModule({
  declarations: [
    AppComponent,
    DocumentosComponent,
    ContactosComponent,
    HomeComponent,
    TerminosComponent,
    NosotrosComponent,
    CaracteristicasComponent,
    FooterComponent,
    ServiciosComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //Material Modeules Imports
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatChipsModule,
    MatExpansionModule,
    CdkAccordionModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,


    //3rd Party Libray
    OwlModule,

  ],
  exports: [FooterComponent, MatExpansionModule, CdkAccordionModule, CommonModule,],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
