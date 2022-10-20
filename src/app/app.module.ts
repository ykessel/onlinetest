import { EnlacesInteresService } from './services/enlaces-interes/enlaces-interes.service';
import { CategoriasEnlaceService } from './services/categorias-enlace/categorias-enlace.service';
import { EnlacesReducer } from './store/enlaces/enlaces.reducer';
import { ContactosReducer } from './store/contactos/contactos.reducer';
import { CategoriasReducer } from './store/categorias/categorias.reducer';
import { AsociadosReducer } from './store/asociados/asociados.reducer';
import { BannersReducer } from './store/banners/banners.reducer';
import { CaracteristicasReducer } from './store/caracteristicas/caracteristicas.reducer';
import { PagosReducer } from './store/pagos/pagos.reducer';
import { PotencialidadesReducer } from './store/potencialidades/potencialidades.reducer';
import { SocialesReducer } from './store/sociales/sociales.reducer';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { MatDialogModule } from '@angular/material/dialog';

// 3rd Party Libray
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgsRevealModule } from 'ngx-scrollreveal';
import { NgcCookieConsentModule, NgcCookieConsentConfig } from 'ngx-cookieconsent';

//App Components
import { DocumentosComponent } from './componentes/documentos/documentos/documentos.component';
import { ContactosComponent, ComfirmDialog } from './componentes/contactos/contactos/contactos.component';
import { HomeComponent } from './componentes/home/home/home.component';
import { TerminosComponent } from './componentes/terminos/terminos/terminos.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros/nosotros.component';
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
import { DatosContactoService } from './services/datos-contacto/datos-contacto.service';


// Redux
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { SeccinesReducer } from './store/secciones/secciones.reducer';
import { IdiomasReducer } from './store/idiomas/idiomas.reducer';
import { DocumentosReducer } from './store/documentos/documentos.reducer';
import { ServiciosReducer } from './store/servicios/servicios.reducer';
import { SystemLangReducer, SystemServiceIdReducer } from './store/system/system.reducer';
import { BannersComponent } from './componentes/home/banners/banners.component';
import { SocialesComponent } from './componentes/shared/footer/sociales/sociales.component';
import { SanitazeHtmlPipe } from './pipes/sanitaze-html.pipe';

const cookieConfig:NgcCookieConsentConfig = {
  cookie: {
    domain: "localhost"
  },
  position: "bottom",
  theme: "classic",
  palette: {
    popup: {
      background: "#000000",
      text: "#ffffff",
      link: "#ffffff"
    },
    button: {
      background: "#f1d600",
      text: "#000000",
      border: "transparent"
    }
  },
  type: "opt-in",
  content: {
    message: "This website uses cookies to ensure you get the best experience on our website.",
    dismiss: "Got it!",
    deny: "Decline",
    link: "Learn more",
    href: "https://cookiesandyou.com",
    policy: "Cookie Policy",
    header: "Cookies used on the website!",
    allow: "Allow cookies"
  }
};

@NgModule({
  declarations: [
    AppComponent,
    DocumentosComponent,
    ContactosComponent,
    HomeComponent,
    TerminosComponent,
    NosotrosComponent,
    FooterComponent,
    ServiciosComponent,
    NavComponent,
    BannersComponent,
    SocialesComponent,
    ComfirmDialog,
    SanitazeHtmlPipe,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

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
    MatDialogModule,
    FormsModule,

    //3rd Party Libray
    CarouselModule,
    FontAwesomeModule,
    NgsRevealModule,
    StoreModule.forRoot(
      {
        secciones: SeccinesReducer,
        idiomas: IdiomasReducer,
        documentos: DocumentosReducer,
        servicios: ServiciosReducer,
        sociales: SocialesReducer,
        potencialidades: PotencialidadesReducer,
        pagos: PagosReducer,
        caracteristicas: CaracteristicasReducer,
        banners: BannersReducer,
        asociados: AsociadosReducer,
        categorias: CategoriasReducer,
        contactos: ContactosReducer,
        enlaces: EnlacesReducer,
        lang: SystemLangReducer,
        serviceId: SystemServiceIdReducer,
      },
      {}
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    NgcCookieConsentModule.forRoot(cookieConfig),
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
    CategoriasEnlaceService,
    ContactosService,
    EnlacesInteresService,
    DatosContactoService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
