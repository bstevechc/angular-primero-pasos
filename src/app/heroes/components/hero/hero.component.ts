import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age:  number = 45;
  public flag: boolean= true;

  get capitalizedName() : string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    // concatenamos los 2 valores
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    // // TODO
    // throw 'Metodo no implementado'
    this.name = 'Spiderman';
    this.flag = false;
  }

  changeAge(): void {
    this.age = 23;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age  = 45;

    // document.querySelector('h1')!.innerHTML = '<h1>Desde Angular</h1>';
    document.querySelectorAll('h1')!.forEach( element => {
      element.innerHTML = '<h1>Desde Angular</h1>';
    })
  }

}
