import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobrenosComponent } from './pages/sobrenos/sobrenos.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { HomeComponent } from './pages/home/home.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { DrogasComponent } from './pages/drogas/drogas.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'sobrenos',component:SobrenosComponent},
  {path:'contato',component:ContatoComponent},
  {path:'formulario',component:FormularioComponent},
  {path:'drogas',component:DrogasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
