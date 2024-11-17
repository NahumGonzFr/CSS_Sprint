import { Routes } from '@angular/router';
import { CardsComponent } from './pages/cards/cards.component';
import { GraficaComponent } from './pages/grafica/grafica.component';
import { Grafica2Component } from './pages/grafica2/grafica2.component';
import { Grafica3Component } from './pages/grafica3/grafica3.component';

export const routes: Routes = [
  {path: '',component: CardsComponent},
  {path: 'grafica',component: GraficaComponent},
  {path: 'grafica2',component: Grafica2Component},
  {path: 'grafica3',component: Grafica3Component}
];
