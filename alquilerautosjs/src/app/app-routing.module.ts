import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AgenciasComponent} from './components/agencias/agencias.component';
import {CatalogoComponent} from './components/catalogo/catalogo.component';
import {HomeComponent} from './components/home/home.component';
import {NosotrosComponent} from './components/nosotros/nosotros.component';
import {OfertasComponent} from './components/ofertas/ofertas.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
