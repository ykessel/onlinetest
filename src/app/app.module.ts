import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { CdkAccordionModule } from '@angular/cdk/accordion';

// Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';

// 3rd Party Libray
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgsRevealModule } from 'ngx-scrollreveal';

//App Components
import { DocumentosComponent } from './componentes/documentos/documentos/documentos.component';
import { ContactosComponent } from './componentes/contactos/contactos/contactos.component';
import { HomeComponent } from './componentes/home/home/home.component';
import { TerminosComponent } from './componentes/terminos/terminos/terminos.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros/nosotros.component';
import { CaracteristicasComponent } from './componentes/servicios/caracteristicas/caracteristicas.component';
import { ServiciosComponent } from './componentes/servicios/servicios/servicios.component';
import { FooterComponent } from './componentes/shared/footer/footer.component';
import { NavComponent } from './componentes/shared/nav/nav.component';
import { AppComponent } from './app.component';

// App Routing
import { AppRoutingModule } from './app-routing.module';

//App Services
import { AsociadosService } from './services/asociados/asociados.service';
import { CaracteristicasService } from './services/caracteristicas/caracteristicas.service';
import { ContactosService } from './services/contactos/contactos.service';
import { DocumentosService } from './services/documentos/documentos.service';
import { IdiomasService } from './services/idiomas/idiomas.service';
import { ServiciosService } from './services/servicios/servicios.service';
import { SocialesService } from './services/sociales/sociales.service';
import { SeccionesService } from 'src/app/services/secciones/secciones.service';
import { PotencialidadesService } from './services/potencialidades/potencialidades.service';
import { PagosService } from './services/pagos/pagos.service';
import { BannersService } from './services/banners/banners.service';

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
    NavComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,

    //Material Modeules Imports
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatChipsModule,
    MatExpansionModule,
    CdkAccordionModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    // MatSelectModule,

    //3rd Party Libray
    CarouselModule,
    FontAwesomeModule,
    NgsRevealModule
  ],
  exports: [
    FooterComponent,
    MatExpansionModule,
    CdkAccordionModule,
    CommonModule,
  ],
  providers: [
    SeccionesService,
    AsociadosService,
    BannersService,
    CaracteristicasService,
    ContactosService,
    DocumentosService,
    IdiomasService,
    PagosService,
    PotencialidadesService,
    SeccionesService,
    ServiciosService,
    SocialesService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
