import { Component } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { Contato } from '../../componentes/contato/contato';

@Component({
  selector: 'app-perfil-contato',
  standalone: true,
  imports: [ContainerComponent, ContainerComponent],
  templateUrl: './perfil-contato.component.html',
  styleUrl: './perfil-contato.component.css',
})
export class PerfilContatoComponent {

  contato: Contato = {
    nome: 'João',
    telefone: '88 88888888',
    email: 'joao@email.com',
    aniversario: '1990-01-06',
    redes: '',
    observacoes: '',
    id: 2,
  };
}
