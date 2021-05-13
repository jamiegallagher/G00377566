import { Component, OnInit } from '@angular/core';
import {PintserviceService} from '../Services/pintservice.service';
import {CartPage} from '../cart/cart.page';
import { BehaviorSubject } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { TablenumbersPage } from '../tablenumbers/tablenumbers.page';

@Component({
  selector: 'app-hotdrink',
  templateUrl: './hotdrink.page.html',
  styleUrls: ['./hotdrink.page.scss'],
})
export class HotdrinkPage implements OnInit {
hotdrinks:any = [];
cart:any = [];
products:any = [];
cartItemCount: BehaviorSubject<number>;
  constructor(private hotdrink:PintserviceService, private modalCtrl: ModalController) { }

  ngOnInit() 
  {
    this.hotdrink.GetHotDrinkData().subscribe((data)=>{
      this.hotdrinks = data.hotdrinks;
      console.log(this.hotdrinks);
    })

    this.products = this.hotdrink.getHotDrinkProducts();

    this.cart = this.hotdrink.getCart();
    this.cartItemCount = this.hotdrink.getCartItemCount();
  }

  addToCart(GetHotDrinkData) {
    this.hotdrink.addPint(GetHotDrinkData);
  }

  async openCart()
  {
    let modal = await this.modalCtrl.create({
      component: TablenumbersPage,
      cssClass: 'cart-modal'
    });
    modal.present();
  }

}
