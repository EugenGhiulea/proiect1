import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proiect1';
  numeCopil: string="Componenta copil"
  evenimentParinte(parametru: any){
      console.log(parametru)
  }
}
