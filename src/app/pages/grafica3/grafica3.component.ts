import { Component } from '@angular/core';
import { DonaGraficaComponent } from '../grafica/dona-grafica/dona-grafica.component';

type TipoGrafica = 'calorias' | 'porciones' | 'peso';

@Component({
  selector: 'app-grafica3',
  standalone: true,
  imports: [DonaGraficaComponent],
  templateUrl: './grafica3.component.html',
  styleUrl: './grafica3.component.css'
})
export class Grafica3Component {
  graficaActual: any = {};

  datosGraficas: Record<TipoGrafica, { labels: string[]; data: number[] }> = {
    calorias: { labels: ['Consumidas', 'Restantes'], data: [1700, 300] },
    porciones: { labels: ['Frutas', 'Proteínas', 'Grasas'], data: [1, 2, 1] },
    peso: { labels: ['Peso actual', 'Meta'], data: [79, 65] }
  };

  mostrarGrafica(tipo: TipoGrafica) {
    this.graficaActual = this.datosGraficas[tipo];
  }

  cambiarPeriodo(periodo: string) {
    console.log(`Cambiando período a: ${periodo}`);
    // Aquí puedes manejar cambios en los datos según el período seleccionado
  }
}
