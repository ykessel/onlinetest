import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home/home.component';
import { ServiciosComponent } from './componentes/servicios/servicios/servicios.component';
import { DocumentosComponent } from './componentes/documentos/documentos/documentos.component';
import { ContactosComponent } from './componentes/contactos/contactos/contactos.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros/nosotros.component';

const routes: Routes = [
  {path: '', component: HomeComponent, data: {name: 'inicio'}},
  {path: 'nosotros', component: NosotrosComponent, data: {name: 'nosotros'} },
  {path: 'servicios', component: ServiciosComponent, data: {name: 'servicios'}},
  {path: 'documentos', component: DocumentosComponent, data: {name: 'documentos'}},
  {path: 'contactos', component: ContactosComponent, data: {name: 'contactos'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
