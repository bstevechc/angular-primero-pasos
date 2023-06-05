import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Modulos
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';


// Esto puede crecer bastante es decir las importacionese de modulos
import { AppComponent } from './app.component';
// import { HeroComponent } from './heroes/hero/hero.component';
// import { ListComponent } from './heroes/list/list.component';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
