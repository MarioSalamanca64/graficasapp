import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal: boolean = false;

  public barChartOptions: ChartOptions = {
    //para que sea responsivo
    responsive: true,
  };

  @Input() barChartLabels: Label[] = [
    //'2020', '2021', '2022', '2023', '2024', '2025', '2026'
  ];
  //chartipe dice los tipos de graficas
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
 

  @Input() barChartData: ChartDataSets[] = [
    // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#D3C8E8', hoverBackgroundColor: '#EDF0B1'},
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#FFCCBF', hoverBackgroundColor: '#EDF0B1' },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series C', backgroundColor: '#E6FEFA', hoverBackgroundColor: '#EDF0B1' },
    // { data: [28, 48, 40, 19, 45, 20, 100], label: 'Series D',backgroundColor: '#FFD4BA', hoverBackgroundColor: '#EDF0B1' },
  ];

  constructor() {
  }
  
  ngOnInit(): void {
    
    if( this.horizontal){
        this.barChartType = 'horizontalBar'
    }
  }
  

}
