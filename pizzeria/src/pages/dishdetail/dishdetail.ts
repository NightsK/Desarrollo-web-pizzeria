import { Component, Inject, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Dish} from'../../shared/dish'; 
import {Comment} from'../../shared/comment'; 

/**
 * Generated class for the DishdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dishdetail',
  templateUrl: 'dishdetail.html',
})
export class DishdetailPage implements OnInit{

  dish:Dish;
  numComments:number;
  averageRat: string;
  total: any;
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    @Inject('DbURL') private dbURL
     

    ) 
     {
      this.dish = navParams.get('dish');
      this.numComments = this.dish.comments.length;
      /* la media de los reslutados 
      por cada platillo sumamos su rating 
      despues el total lo dividimos entre el total 
      y lo limitamos a uqe solo nuestre 2 decimales*/

      let total = 0;
      this.dish.comments.forEach(
      comm => {
      total += comm.rating
    }
  );
  this.averageRat = (total/this.numComments).toFixed(2);
  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad DishdetailPage');
  }

  ngOnInit(){
 
  }

  
}

