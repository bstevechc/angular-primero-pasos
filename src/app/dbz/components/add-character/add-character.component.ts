import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  //Agregamos una emision de eventos
  //es un objeto de tipo eventEmitter (emite strings, objetos, numeros, etc)
  //emitimos un Character en al parte <Character>
  //para que funcione y el html escuche lo que se emite se agrega el decorador @Output()
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter():void {

    // debugger;
    // console.table(this.character);

    //hacemos una validacion si no viene el nombre no lo acepto
    if ( this.character.name.length === 0 ) return;
    //si es que tiene nombre emitimos algo de tipo Character
    //estamos emitiendo el this.character para mandar al padre
    this.onNewCharacter.emit(this.character);
    //Seteamos los valores en vacio o 0
    this.character = {
      name : '',
      power : 0
    }
  }

}
