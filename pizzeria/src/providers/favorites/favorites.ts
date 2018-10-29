import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rx';
import { Dish } from '../../shared/dish';

/*
  Generated class for the FavoritesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoritesProvider {
  favorites: Array<any>;

  constructor(public http: HttpClient) {
    console.log('Hello FavoritesProvider Provider');
    this.favorites = []
  }
  addToFavorites(id: number): boolean { 
    if (!this.isFavorite(id)){
      this.favorites.push(id);
    }
    console.log(this.favorites);
    return true;
  }
  isFavorite(id:number): boolean { 
    return this.favorites.some(dish => dish===id) 
    }
  getFavorites(): Observable<Dish[]>{
    console.log(this.favorites);
    return this.dishService.getDishes().map(
      res => res.filter(dishes => this.favorites.some(dish => dish == dishes.id))
    )
   
  }   
    

}
