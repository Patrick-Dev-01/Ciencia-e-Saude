import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HomeComponent } from './componentes/home/home.component';
import { DicasComponent } from './componentes/dicas/dicas.component';
import { CienciaComponent } from './componentes/ciencia/ciencia.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ReceitasComponent } from './componentes/receitas/receitas.component';
import { RefeicoesComponent } from './componentes/dicas/refeicoes/refeicoes.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DicasComponent,
    CienciaComponent,
    FooterComponent,
    ReceitasComponent,
    RefeicoesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
