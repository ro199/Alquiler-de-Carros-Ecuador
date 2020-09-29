import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { HomeComponent } from './rutas/home/home.component';
import { CatalogoComponent } from './rutas/catalogo/catalogo.component';
import { NosotrosComponent } from './rutas/nosotros/nosotros.component';
import { OfertasComponent } from './rutas/ofertas/ofertas.component';
import { AgenciasComponent } from './rutas/agencias/agencias.component';
import { FooterComponent } from './components/footer/footer.component';
import { AutocardComponent } from './components/autocard/autocard.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './servicios/http/auth.service';
import { AdministradorComponent } from './rutas/administrador/administrador.component';
import { ClienteComponent } from './rutas/cliente/cliente.component';
import { AdminautocardComponent } from './components/adminautocard/adminautocard.component';
import { AdminalquilerComponent } from './components/adminalquiler/adminalquiler.component';
import { AdminvaloracionComponent } from './components/adminvaloracion/adminvaloracion.component';
import { ClientealquilercardComponent } from './components/clientealquilercard/clientealquilercard.component';
import { RutaAdminInfoComponent } from './rutas/ruta-admin-info/ruta-admin-info.component';
import { RutaAdminCatalogoComponent } from './rutas/ruta-admin-catalogo/ruta-admin-catalogo.component';
import { RutaAdminValoracionComponent } from './rutas/ruta-admin-valoracion/ruta-admin-valoracion.component';
import { RutaAdminAlquilerComponent } from './rutas/ruta-admin-alquiler/ruta-admin-alquiler.component';
import { RutaClienteInfoComponent } from './rutas/ruta-cliente-info/ruta-cliente-info.component';
import { RutaClienteAlquilerComponent } from './rutas/ruta-cliente-alquiler/ruta-cliente-alquiler.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AdminUpdateFormComponent } from './components/forms/admin-update-form/admin-update-form.component';
import { AdminAddFormComponent } from './components/forms/admin-add-form/admin-add-form.component';
import { AlquilerComponent } from './rutas/alquiler/alquiler.component';
import { HomeMainFormComponent } from './components/forms/home-main-form/home-main-form.component';
import { RutaAdminOfertasComponent } from './rutas/ruta-admin-ofertas/ruta-admin-ofertas.component';
import { AdminofertacardComponent } from './components/adminofertacard/adminofertacard.component';
import { AdminOfertaFormComponent } from './components/forms/admin-oferta-form/admin-oferta-form.component';
import { RateModalComponent } from './components/rate-modal/rate-modal.component';
import { RentaService } from './servicios/http/renta.service';
import { AutoService } from './servicios/http/auto.service';
import { UsuarioService } from './servicios/http/usuario.service';
import { OfertaService } from './servicios/http/oferta.service';
import { PuntuacionService } from './servicios/http/puntuacion.service';
import { OfertaAutoCardComponent } from './components/oferta-auto-card/oferta-auto-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    HomeComponent,
    CatalogoComponent,
    NosotrosComponent,
    OfertasComponent,
    AgenciasComponent,
    FooterComponent,
    AutocardComponent,
    LoginComponent,
    RegistroComponent,
    AdministradorComponent,
    ClienteComponent,
    AdminautocardComponent,
    AdminalquilerComponent,
    AdminvaloracionComponent,
    ClientealquilercardComponent,
    RutaAdminInfoComponent,
    RutaAdminCatalogoComponent,
    RutaAdminValoracionComponent,
    RutaAdminAlquilerComponent,
    RutaClienteInfoComponent,
    RutaClienteAlquilerComponent,
    CarouselComponent,
    AdminUpdateFormComponent,
    AdminAddFormComponent,
    AlquilerComponent,
    HomeMainFormComponent,
    RutaAdminOfertasComponent,
    AdminofertacardComponent,
    AdminOfertaFormComponent,
    RateModalComponent,
    OfertaAutoCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
    RentaService,
    AutoService,
    UsuarioService,
    OfertaService,
    PuntuacionService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
