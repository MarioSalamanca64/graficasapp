import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {
  
  public doughnutChartLabels: Label[] = [
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'others'
  ];
  public doughnutChartData: MultiDataSet = [
    // [350, 450, 100, 150 ],

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
  constructor( private graficasServices: GraficasService) { }

  ngOnInit(): void {

    //PRIMERAFORMA
  //   this.graficasServices.getUsuariosRedesSociales()
  //                         .subscribe( data => {
  //                           console.log(data);
  //                           const labels =  Object.keys(data);
  //                           const values =  Object.values(data);
  //                           //tanbien regresa el areglo que nesesitamos
  //                           this.doughnutChartLabels = labels;
  //                           // tienes que regresar un areglo por eso se manda asi 
  //                           this.doughnutChartData.push(values);
  //                         })

  // }

  this.graficasServices.GetUsuariosRedesSocialesDonaData()
                          //desestructuramos los labels , values que bienene un areglo
                        .subscribe(({labels, values}) => {
                            this.doughnutChartLabels = labels;
                            this.doughnutChartData.push(values)
                        })

}
}
