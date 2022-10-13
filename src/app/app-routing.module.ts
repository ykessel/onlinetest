import { RutaAccesoGuard } from './guards/ruta-acceso.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home/home.component';
import { ServiciosComponent } from './componentes/servicios/servicios/servicios.component';
import { DocumentosComponent } from './componentes/documentos/documentos/documentos.component';
import { ContactosComponent } from './componentes/contactos/contactos/contactos.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros/nosotros.component';
import { TerminosComponent } from './componentes/terminos/terminos/terminos.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full', component: HomeComponent },
  { path: 'nosotros',  canActivate: [RutaAccesoGuard], data: { id: 13}, component: NosotrosComponent },
  { path: 'servicios', canActivate: [RutaAccesoGuard], data: { id: 14}, component: ServiciosComponent },
  { path: 'documentos', canActivate: [RutaAccesoGuard], data: { id: 15}, component: DocumentosComponent },
  { path: 'contactos', canActivate: [RutaAccesoGuard], data: { id: 16},component: ContactosComponent },
  { path: 'terminos', component: TerminosComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', enableTracing: false}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
