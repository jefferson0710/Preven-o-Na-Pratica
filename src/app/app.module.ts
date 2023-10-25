import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SobrenosComponent } from './pages/sobrenos/sobrenos.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { HomeComponent } from './pages/home/home.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { DrogasComponent } from './pages/drogas/drogas.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SobrenosComponent,
    ContatoComponent,
    HomeComponent,
    FormularioComponent,
    DrogasComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
