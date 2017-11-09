import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent implements OnInit {
  ultimoId = 0;
  nome = 'Caline';
  adicionado = false;

  //funcionarios = [];

  @Output() funcionarioAdicionado = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }



  adicionar() {
    console.log(this.nome);
    this.adicionado = true;
    const funcionario = {
      id: ++this.ultimoId,
      nome: this.nome
    };

    this.funcionarioAdicionado.emit(funcionario);
  }
}
