import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaracteristicasComponent } from './privado/caracteristicas/caracteristicas.component';
import { DocumentosComponent } from './privado/documentos/documentos.component';
import { IdiomasComponent } from './privado/idiomas/idiomas.component';
import { LoginComponent } from './privado/login/login.component';
import { MetodosComponent } from './privado/metodos/metodos.component';
import { SeccionesComponent } from './privado/secciones/secciones.component';
import { ServiciosComponent } from './privado/servicios/servicios.component';
import { SidebarComponent } from './privado/sidebar/sidebar.component';
import { UsuariosComponent } from './privado/usuarios/usuarios.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'sidebar',
    component: SidebarComponent,
    children: [
      { path: 'secciones', component: SeccionesComponent },
      { path: 'metodos', component: MetodosComponent },
      { path: 'documentos', component: DocumentosComponent },
      { path: 'caracteristicas', component: CaracteristicasComponent },
      { path: 'servicios', component: ServiciosComponent },
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'idiomas', component: IdiomasComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
