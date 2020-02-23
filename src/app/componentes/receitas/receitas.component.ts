import { Component, OnInit } from '@angular/core';
import { Receitas } from 'src/app/models/receita.model';
import { ReceitaService } from 'src/app/services/receita.service';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.scss']
})
export class ReceitasComponent implements OnInit {
  // variavel booleana para verificar se retornou resultados ou não
  resultados: boolean;
  // importar as tipagem de dados da classe do model de receita
  receitas: Receitas;
  erro: any;

  // instanciar o service da API de receita
  constructor(private receitaService: ReceitaService) { 
    // chamar o metodo no construtor
    this.getReceita();
  }

  ngOnInit() {
  }

  // criando o metodo de pegar as receitas neste componente
  getReceita(){
    // acessar o service de receita e chamar o metodo
    this.receitaService.getReceitas().subscribe(
    // se retornou os valores da api 
    data => {
      // a variavel de receitas recebe o data retornado pela API
      this.receitas = data;
      this.resultados = true;
    },
    // se deu erro
    error => {
      this.erro = error;
      this.resultados = false;
      console.log("Erro: " , error);
    }
    );
  }
}
