import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  // Defino la info que va a usar el lsitado por defecto
  // El @Input() es como el puente de comunicacion entre el padere y el hijo
  @Input()
  public characterList: Character[]= [
    {
      name: 'Trunks',
      power: 10
    }
  ];

  //emitimos con Output() y creamos la variable para emitir un numero
  @Output()
  //otra forma
  //public onDelete = new EventEmitter<number>();
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id: string): void {
    //emitimos el index
    this.onDelete.emit(id);
    console.log(id);
  }
}
