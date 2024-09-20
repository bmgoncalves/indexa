import { Component } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-contato',
  standalone: true,
  imports: [
    ContainerComponent,
    SeparadorComponent,
    ReactiveFormsModule
],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})
export class FormularioContatoComponent {

  contatoForm!: FormGroup;
  constructor() {
    this.contatoForm = new FormGroup({
      nome: new FormControl('dsdsad'),
      telefone: new FormControl('fdgfdg'),
      email: new FormControl('1312312'),
      aniversario: new FormControl('01-01-2001'),
      redes: new FormControl('12345'),
      observacoes: new FormControl('5676876')
    });

  }



}
