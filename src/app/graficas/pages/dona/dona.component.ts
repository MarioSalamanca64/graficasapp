import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent  {

  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'others'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100, 150 ],

  ];
  public doughnutChartType: ChartType = 'doughnut';
  //areglo de colores
  public colors: Color[] = [
    {
      backgroundColor: [
        '#8998B3',
        '#B8D2FF',
        '#FFD7D1',
        '#EBFFB8',
      ] 
    }
  ]
  

}
