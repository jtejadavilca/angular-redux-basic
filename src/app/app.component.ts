import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador = 10;


  sumar(){
    this.contador++;
  }

  restar() {
    this.contador--;
  }

}
