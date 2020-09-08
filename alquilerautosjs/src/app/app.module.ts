import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { HomeComponent } from './components/home/home.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { AgenciasComponent } from './components/agencias/agencias.component';
import { FooterComponent } from './components/footer/footer.component';
import { AutocardComponent } from './components/autocard/autocard.component';

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
    AutocardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
