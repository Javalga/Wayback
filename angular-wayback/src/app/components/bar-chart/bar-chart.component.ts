import { Component, destroyPlatform, OnDestroy, ViewChild } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js'
import { OnInit } from '@angular/core';
import { ChartinfoService } from 'src/app/shared/chartinfo.service';

Chart.register(...registerables)

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor(public chartInfoService: ChartinfoService) {

  }

  ngOnInit(): void {
    this.RenderChart();
  }

  RenderChart() {
    // console.log(this.chartInfoService.solvedAmount);
    // console.log(this.chartInfoService.intoWarehouseAmount);
    // console.log(this.chartInfoService.returnsAmount);
    // console.log(this.chartInfoService.returnsAmount);

    this.chartInfoService.chart2 = new Chart('barchart', {
      type: 'bar',
      data: {
        labels: ['Total', 'Solucionadas', 'Devoluciones', 'Pendientes de solución', 'Rechazadas'],
        datasets: [{
          label: "Numero de Incidencias",
          data: [this.chartInfoService.totalAmount, this.chartInfoService.solvedAmount, this.chartInfoService.intoWarehouseAmount, this.chartInfoService.returnsAmount, this.chartInfoService.rejectedAmount],
          borderWidth: 1,
          backgroundColor: ['#ffffff', '#36a2eb', '#ff6384', '#ff9f40', '#ffcd56'],
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        },

        scales: {
          y: {
            ticks: {
              color: '#ffffff'
            },
            beginAtZero: true
          },
          x: {
            ticks: {
              color: '#ffffff'
            },
          }

        },
      }
    });

    // console.log(this.chartInfoService.chart)
  }
}



