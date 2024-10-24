import { Injectable, OnInit } from '@angular/core';
import { Contato } from '../componentes/contato/contato';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ContatoService implements OnInit{
  private readonly API = 'http://localhost:3000/contatos';

  constructor(private http: HttpClient ) {}
  ngOnInit(): void {

  }

  obterContatos(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.API);
  }

  salvarContato(contato:Contato){
    return this.http.post<Contato>(this.API, contato);
  }
}
