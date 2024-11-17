import { Component, Input, OnChanges } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-dona-grafica',
  standalone: true,
  imports: [],
  template: '<canvas id="donaGrafica"></canvas>',
  styleUrl: './dona-grafica.component.css'
})
export class DonaGraficaComponent implements OnChanges {
  @Input() data: any = {};
  chart: any;

  ngOnChanges() {
    if (this.chart) this.chart.destroy(); // Limpia gráfica previa
    this.chart = new Chart('donaGrafica', {
      type: 'doughnut',
      data: {
        labels: this.data.labels || [],
        datasets: [
          {
            data: this.data.data || [],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56','#']
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' }
        }
      }
    });
  }
}
