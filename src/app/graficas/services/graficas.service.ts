import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor( private http: HttpClient ) { }
  //este es un obserbable
  getUsuariosRedesSociales(){
    return this.http.get(' http://localhost:3000/grafica');

}
//igual estes es un obserbable
GetUsuariosRedesSocialesDonaData(){
return this.getUsuariosRedesSociales()
      .pipe(
        delay(1500),
        //map trasforma los datos
        map(data => {
          console.log(data);
          const labels =  Object.keys(data);
          const values =  Object.values(data);
          //regresa estos dos en un areglo
          return {labels,values};
        })
      )
}


}

