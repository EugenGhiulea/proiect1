import { Component } from '@angular/core';

@Component({
  selector: 'app-prima',
  templateUrl: './prima.component.html',
  styleUrls: ['./prima.component.css']
})
export class PrimaComponent {
    nume: string="Eugen"
    culoare:string=""

alternativa: string = "Imaginea nu a fost gasita!"

    onClick(){
      alert("Am fost apasat!")
    }
}
