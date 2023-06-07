import { DbzService } from '../services/dbz.service';
import { Component } from '@angular/core';

// importamos la interface
import { Character } from './../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-pages.component.html'
})

export class MainPageComponent {
  //Pasamos el codigo al servicio dbz.service.ts y continuamos abajo
  // // Defino los valores en el padre que debe usar la lista desde el hijo
  // public characters: Character[] = [
  //   {
  //     name: 'Krillin',
  //     power: 1000
  //   },
  //   {
  //     name: 'Goku',
  //     power: 9500
  //   },
  //   {
  //     name: 'Vegeta',
  //     power: 7500
  //   }
  // ];

  // //Es el mismo nombre de funcion que debe estar en el html
  // onNewCharacter( character: Character ): void {
  //   // console.log('MainPage');
  //   // console.log(character);
  //   this.characters.push(character);
  // }

  // onDeleteCharacter(index: number): void {
  //   this.characters.splice(index, 1);
  // }

  //Continuacion

  //el constructor nos sirve tanto para inyeccionďď dependencias
  // como para declarar propiedades que solo pueden ser suadas dentro del constructor
  //inyecto mi servicio para agregar toda la informacion usada en el servicio
  //generalmente es privado pero esta vez se lo pone publico
  //constructor( public dbzService: DbzService ) {
  //!al poner en private el service no tengo acceso
  //!a el ni desde el html solo dentro del constructor
  constructor( private dbzService: DbzService ) {}

  //usualmente se modifica la data danto en el html como en el servicio
  //por lo que al usar un spread se hace una copia de c/u de los personajes
  //!en caso de venir los datos de una bdd no se hace asi [...]
  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter( id:string ): void {
    this.dbzService.onDeleteById( id );
  }

  onNewCharacter( character: Character ): void{
    this.dbzService.addCharacter( character );
  }

}
