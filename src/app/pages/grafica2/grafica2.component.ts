import { Component } from '@angular/core';
import { DonaGraficaComponent } from '../grafica/dona-grafica/dona-grafica.component';

type TipoGrafica = 'calorias' | 'porciones' | 'peso';

@Component({
  selector: 'app-grafica2',
  standalone: true,
  imports: [DonaGraficaComponent],
  templateUrl: './grafica2.component.html',
  styleUrl: './grafica2.component.css'
})
export class Grafica2Component {
  graficaActual: any = {};

  datosGraficas: Record<TipoGrafica, { labels: string[]; data: number[] }> = {
    calorias: { labels: ['Consumidas', 'Restantes'], data: [1300, 700] },
    porciones: { labels: ['Frutas', 'Proteínas', 'Grasas'], data: [2, 2, 3] },
    peso: { labels: ['Peso actual', 'Meta'], data: [74, 66] }
  };

  mostrarGrafica(tipo: TipoGrafica) {
    this.graficaActual = this.datosGraficas[tipo];
  }

  cambiarPeriodo(periodo: string) {
    console.log(`Cambiando período a: ${periodo}`);
    // Aquí puedes manejar cambios en los datos según el período seleccionado
  }
}
