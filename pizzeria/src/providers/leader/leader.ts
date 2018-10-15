import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Leader} from'../../shared/leader';
import {dbURL} from '../../shared/dburl';
/*
  Generated class for the LeaderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LeaderProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LeaderProvider Provider');
  }
  getLeader(): Observable<Leader[]>{
    return this.http.get<Leader[]>(dbURL + 'leaders').map(
      res => res
    );
  }
  getFeaturedLeader(): Observable<Leader>{
    return this.http.get<Leader>(dbURL + 'leaders?featured=true').map(
      res => res
    );
  }

}
