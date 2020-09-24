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
import {AdminUpdateFormComponent} from './components/forms/admin-update-form/admin-update-form.component';
import {AdminAddFormComponent} from './components/forms/admin-add-form/admin-add-form.component';
import {AlquilerComponent} from './rutas/alquiler/alquiler.component';
import {AuthGuard} from './servicios/http/auth.guard';
import {CheckUsuario} from './servicios/http/check.usuario';
import {RutaAdminOfertasComponent} from './rutas/ruta-admin-ofertas/ruta-admin-ofertas.component';
import {AdminOfertaFormComponent} from './components/forms/admin-oferta-form/admin-oferta-form.component';

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
    canActivate: [CheckUsuario],
    component: LoginComponent
  },
  {
    path: 'registro',
    canActivate: [CheckUsuario],
    component: RegistroComponent
  },
  {
    path: 'alquiler/:id',
    component: AlquilerComponent
  },
  {
    path: 'cliente',
    canActivate: [AuthGuard], data: {roles: ['cliente']},
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
    canActivate: [AuthGuard], data: {roles: ['administrador']},
    component: AdministradorComponent,
    children: [
      {
        path: 'info',
        component: RutaAdminInfoComponent
      },
      {
        path: 'catalogo',
        component: RutaAdminCatalogoComponent,
        children: [
          {
            path: 'nuevo',
            component: AdminAddFormComponent
          },
          {
            path: 'editar/:id',
            component: AdminUpdateFormComponent
          },
        ]
      },
      {
        path: 'ofertas',
        component: RutaAdminOfertasComponent,
        children: [
          {
            path: 'nuevo',
            component: AdminOfertaFormComponent
          },
          {
            path: 'editar/:id',
            component: AdminOfertaFormComponent
          },
        ]
      },
      {
        path: 'valoracion',
        component: RutaAdminValoracionComponent,
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
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
