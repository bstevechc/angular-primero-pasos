import { Injectable } from '@angular/core';
//Libreria para crear ids
import { v4 as uuid } from 'uuid';

//console.log(v4());

import { Character } from '../interfaces/character.interface';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class DbzService {
  //Defino los valores en el padre que debe usar la lista desde el hijo
  public characters: Character[] =
  [
    {
      id: uuid(),
      name: 'Persona 1',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Persona 2',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Persona 3',
      power: 7500
    }
  ];

  //Es el mismo nombre de funcion que debe estar en el html
  addCharacter( character: Character ): void {
    // console.log('MainPage');
    // console.log(character);

    /*
    con .. o spread lo que hago es mandar todo lo que este en character unido
    es decir solo envio el uuid() y lo demas sera las caracteristicas del character
    !primero se pone el spreed y luego lo que se debe sobreescribir en realidad debe ser { ...character, id: uuid() }
    */
    const newCharacter : Character = { id: uuid(), ...character }
    this.characters.push(newCharacter);
  }

  /* Funcion vieja sin usar id
  onDeleteCharacter(index: number): void {
    this.characters.splice(index, 1);
  }
  */
 onDeleteById( id: string ): void {
  /*
    Esto filtra y regresa un nuevo arreglo donde el character.id es diferente al id que se recibe como argumento
    por lo que el filter va a retornar todos los elementos que cumplan la condicion de adentro
    !Por lo que le nuevo arreglo contiene a todos menos al que no cumpla con al condicion
  */
  this.characters = this.characters.filter( character => character.id !== id )

 }


}
