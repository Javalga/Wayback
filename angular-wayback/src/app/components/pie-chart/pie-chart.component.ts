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

export class PieChartComponent implements OnInit {

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

    this.chartInfoService.chart = new Chart('piechart', {
      type: 'doughnut',
      data: {
        labels: ['Solucionadas', 'Devoluciones', 'Pendientes de solución', 'Rechazadas'],
        datasets: [{
          label: 'Estadísticas',
          data: [this.chartInfoService.solvedPercentResult, this.chartInfoService.returnPercentResult, this.chartInfoService.intoWarehousePercentResult, this.chartInfoService.rejectedPercentResult],
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          legend: {
            labels: {
              color: "#ffffff"
            }
          }
        },
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
    // console.log(this.chartInfoService.chart)
  }
}
