import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-doilea',
  templateUrl: './doilea.component.html',
  styleUrls: ['./doilea.component.css']
})
export class DoileaComponent {

  @Input() childGivenName: string=""
  @Output() valueEmitter= new EventEmitter<any>()

  onClickFromChild(){
    this.valueEmitter.emit("Salut din componenta copil")
  }
}
