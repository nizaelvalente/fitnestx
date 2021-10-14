import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fitnestx';

  public show() {
    alert('Clicou!');
  }

  public mostrarResultado(dados: any) {
    console.log(dados);
  }
}
