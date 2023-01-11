import { Component, destroyPlatform, OnDestroy, ViewChild } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js'
import { OnInit } from '@angular/core';
import { ChartinfoService } from 'src/app/shared/chartinfo.service';

Chart.register(...registerables)

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})

export class PieChartComponent implements OnInit, OnDestroy {

  constructor(public chartInfoService: ChartinfoService) {

  }

  updateChart() {
    this.chartInfoService.chart.update()
  }
  ngOnInit(): void {
    this.RenderChart();
  }
  ngOnDestroy() {
    console.log("destruido")
  }

  RenderChart() {
    console.log(this.chartInfoService.solvedAmount);
    console.log(this.chartInfoService.intoWarehouseAmount);
    console.log(this.chartInfoService.returnsAmount);
    console.log(this.chartInfoService.returnsAmount);

    this.chartInfoService.chart = new Chart('piechart', {
      type: 'doughnut',
      data: {
        labels: ['Solucionadas', 'Pendientes de solución', 'Devoluciones', 'Rechazadas'],
        datasets: [{
          label: 'Estadísticas',
          data: [this.chartInfoService.solvedAmount, this.chartInfoService.intoWarehouseAmount, this.chartInfoService.returnsAmount, this.chartInfoService.rejectedAmount],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            display: false
          },
          x: {
            display: false
          }
        },
      }
    });
    console.log(this.chartInfoService.chart)
  }
}
