import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { CienciaComponent } from './componentes/ciencia/ciencia.component';
import { DicasComponent } from './componentes/dicas/dicas.component';
import { ReceitasComponent } from './componentes/receitas/receitas.component';


const routes: Routes = [
  // home
  { path: '', component: HomeComponent},
  // Pagina da ciencia
  { path: 'ciencia', component: CienciaComponent },
  // pagina de dicas
  { path: 'dicas', component: DicasComponent },
  // pagina de receitas
  { path: 'receitas', component: ReceitasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
