import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  // styleUrls: ['./funcionario-card.component.css']
  styles: [`
    .card-block {
      text-transform: uppercase;
      color: blue;
    }
  `]
})
export class FuncionarioCardComponent implements OnInit {

  @Input() funcionario: any;

  constructor() { }

  ngOnInit() {
  }

  public getEstilosCartao() {
    return {
      'border-width.px': this.funcionario.id,
      backgroundColor: this.funcionario.id % 2 === 0 ? 'lightblue' : 'lightgreen'
    };
  }

  public getListaClassesCss() {
    return ['badge', 'badge-primary'];
  }

  public isAdmin() {
    return this.funcionario.nome.startsWith('R');
  }
}
