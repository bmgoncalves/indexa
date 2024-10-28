import { ContatoService } from './../../services/contato.service';
import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { Contato } from '../../componentes/contato/contato';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-perfil-contato',
  standalone: true,
  imports: [ContainerComponent, ContainerComponent],
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
        console.log(`chegou no excluir do botao`)
        	this.router.navigateByUrl('/lista-contatos');
      });
    }
  }

}
