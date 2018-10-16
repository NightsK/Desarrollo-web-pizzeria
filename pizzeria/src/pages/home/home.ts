import { Component, OnInit, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';

import {DishProvider} from '../../providers/dish/dish';
import {PromotionProvider} from '../../providers/promotion/promotion';
import {LeaderProvider} from '../../providers/leader/leader';

import {Dish} from'../../shared/dish'; 
import {Promotion} from'../../shared/promotion'; 
import {Leader} from'../../shared/leader'; 


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  dish:Dish;
  promotion:Promotion;
  leader:Leader;

  constructor(
    public navCtrl: NavController,
    private dishService: DishProvider,
    private leaderService: LeaderProvider,
    private promotionService: PromotionProvider,
    @Inject('DbURL') private dbURL

    ) 
    {

    }



    getFeaturedDish(){
      this.dishService 
      .getFeaturedDish()
      .subscribe(
        response => {
          this.dish=response[0];
          console.log('ok');
        }
      )
    }

    
    getFeaturedPromotion(){
      this.promotionService 
      .getFeaturedPromotion()
      .subscribe(
        response => {
          this.promotion=response[0];
          console.log(this.promotion);
        }
      )
    }
    getFeaturedLeader(){
      this.leaderService
      .getFeaturedLeader()
      .subscribe(
        response => {
          this.leader=response[0];
          console.log(this.leader);
        }
      )
    }
 
  ngOnInit(){
  this.getFeaturedDish();
  this.getFeaturedLeader();
  this.getFeaturedPromotion();
  }

}
