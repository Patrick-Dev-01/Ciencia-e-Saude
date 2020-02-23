import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  constructor(private http: HttpClient) { }

  // metodos que pega as receita na api
  public getReceitas():Observable<any>{
    // retorna uma requisição http
    return this.http.get("http://localhost:8000");
  }
}
