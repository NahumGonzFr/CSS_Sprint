import { Component } from '@angular/core';
import { DonaGraficaComponent } from './dona-grafica/dona-grafica.component';

type TipoGrafica = 'calorias' | 'porciones' | 'peso';

@Component({
  selector: 'app-grafica',
  standalone: true,
  imports: [ DonaGraficaComponent],
  templateUrl: './grafica.component.html',
  styleUrl: './grafica.component.css'
})
export class GraficaComponent {
  graficaActual: any = {};

  datosGraficas: Record<TipoGrafica, { labels: string[]; data: number[] }> = {
    calorias: { labels: ['Consumidas', 'Restantes','Excedentes'], data: [1500, 500,0] },
    porciones: { labels: ['Frutas', 'Proteínas', 'Grasas'], data: [3, 2, 1] },
    peso: { labels: ['Peso actual', 'Meta'], data: [70, 65] }
  };

  mostrarGrafica(tipo: TipoGrafica) {
    this.graficaActual = this.datosGraficas[tipo];
  }

  cambiarPeriodo(periodo: string) {
    console.log(`Cambiando período a: ${periodo}`);
    // Aquí puedes manejar cambios en los datos según el período seleccionado
  }
}
