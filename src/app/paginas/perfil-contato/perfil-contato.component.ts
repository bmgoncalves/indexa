import { ContatoService } from './../../services/contato.service';
import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { Contato } from '../../componentes/contato/contato';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-perfil-contato',
  standalone: true,
  imports: [ContainerComponent, ContainerComponent, RouterLink],
  templateUrl: './perfil-contato.component.html',
  styleUrl: './perfil-contato.component.css',
})

export class PerfilContatoComponent implements OnInit {

  contato: Contato = {
    nome: 'João',
    telefone: '88 88888888',
    email: 'joao@email.com',
    aniversario: '1990-01-06',
    redes: '',
    observacoes: '',
    id: 2,
  };

  constructor(private activatedRoute: ActivatedRoute, private contatoService: ContatoService ){}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if(id){
      this.contatoService.buscarPorId(parseInt(id)).subscribe((contatoParam) => {
        this.contato = contatoParam;
      });
    }

  }

}
