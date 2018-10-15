import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Dish} from'../../shared/dish';
import {dbURL} from '../../shared/dburl';

/*
  Generated class for the DishProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DishProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DishProvider Provider');
  }
//estamos creando una funcion getDishes, esta extrae informacion del array Dish que se importo anteriormente 
//luego lo cachamos y lo guarda, tambien se saca la informacion del localhost/dishes y lo mapea
  getDishes(): Observable<Dish[]>{
    return this.http.get<Dish[]>(dbURL + 'dishes').map(
      res => res
    );
  }
  getFeaturedDish(): Observable<Dish[]>{
    return this.http.get<Dish[]>(dbURL + 'dishes?featured=true').map(
      res => res
    );
  }
}
