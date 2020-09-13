import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AgenciasComponent} from './rutas/agencias/agencias.component';
import {CatalogoComponent} from './rutas/catalogo/catalogo.component';
import {HomeComponent} from './rutas/home/home.component';
import {NosotrosComponent} from './rutas/nosotros/nosotros.component';
import {OfertasComponent} from './rutas/ofertas/ofertas.component';
import {LoginComponent} from './components/login/login.component';
import {RegistroComponent} from './components/registro/registro.component';
import {AdministradorComponent} from './rutas/administrador/administrador.component';
import {ClienteComponent} from './rutas/cliente/cliente.component';
import {RutaAdminAlquilerComponent} from './rutas/ruta-admin-alquiler/ruta-admin-alquiler.component';
import {RutaAdminCatalogoComponent} from './rutas/ruta-admin-catalogo/ruta-admin-catalogo.component';
import {RutaAdminInfoComponent} from './rutas/ruta-admin-info/ruta-admin-info.component';
import {RutaAdminValoracionComponent} from './rutas/ruta-admin-valoracion/ruta-admin-valoracion.component';
import {RutaClienteInfoComponent} from './rutas/ruta-cliente-info/ruta-cliente-info.component';
import {RutaClienteAlquilerComponent} from './rutas/ruta-cliente-alquiler/ruta-cliente-alquiler.component';


const routes: Routes = [
  {
    path: 'inicio',
    component: HomeComponent
  },
  {
    path: 'catalogo',
    component: CatalogoComponent
  },
  {
    path: 'agencias',
    component: AgenciasComponent
  },
  {
    path: 'ofertas',
    component: OfertasComponent
  },
  {
    path: 'nosotros',
    component: NosotrosComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'cliente',
    component: ClienteComponent,
    children: [
      {
        path: 'info',
        component: RutaClienteInfoComponent
      },
      {
        path: 'alquiler',
        component: RutaClienteAlquilerComponent
      },
      {
        path: '',
        redirectTo: 'info',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'administrador',
    component: AdministradorComponent,
    children: [
      {
        path: 'info',
        component: RutaAdminInfoComponent
      },
      {
        path: 'catalogo',
        component: RutaAdminCatalogoComponent
      },
      {
        path: 'valoracion',
        component: RutaAdminValoracionComponent
      },
      {
        path: 'alquiler',
        component: RutaAdminAlquilerComponent
      },
      {
        path: '',
        redirectTo: 'info',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
