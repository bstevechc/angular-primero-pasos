import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ['Persona 1','Persona 2','Persona 3', 'Persona 4', 'Persona 5'];
  public deletedHero?: string = '';

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }


}
