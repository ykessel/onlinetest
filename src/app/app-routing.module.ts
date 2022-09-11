import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home/home.component';
import { ServiciosComponent } from './componentes/servicios/servicios/servicios.component';
import { DocumentosComponent } from './componentes/documentos/documentos/documentos.component';
import { ContactosComponent } from './componentes/contactos/contactos/contactos.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros/nosotros.component';
import { TerminosComponent } from './componentes/terminos/terminos/terminos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'documentos', component: DocumentosComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: 'terminos', component: TerminosComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
