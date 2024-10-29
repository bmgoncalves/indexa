import { ContatoService } from './../../services/contato.service';
import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { Contato } from '../../componentes/contato/contato';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SeparadorComponent } from '../../componentes/separador/separador.component';

@Component({
  selector: 'app-perfil-contato',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    RouterLink,
    SeparadorComponent
  ],
  templateUrl: './perfil-contato.component.html',
  styleUrl: './perfil-contato.component.css',
})

export class PerfilContatoComponent implements OnInit {

  contato: Contato = {
    nome: 'João',
    avatar: '',
    telefone: '88 88888888',
    email: 'joao@email.com',
    aniversario: '1990-01-06',
    redes: '',
    observacoes: '',
    id: 2,
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private contatoService: ContatoService,
    private router: Router
  ){}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if(id){
      this.contatoService.buscarPorId(parseInt(id)).subscribe((contatoParam) => {
        this.contato = contatoParam;
      });
    }

  }

  excluir(){
    if(this.contato.id){
      this.contatoService.excluirContato(this.contato.id).subscribe(() =>{
        	this.router.navigateByUrl('/lista-contatos');
      });
    }
  }

}
