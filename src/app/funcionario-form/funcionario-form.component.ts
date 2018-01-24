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

  // funcionarios = [];

  dataAniversario = new Date(1990, 3, 19);
  preco = 12855.32;
  troco = 0.57392;

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
