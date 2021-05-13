import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartPage } from '../cart/cart.page';
import {PintserviceService} from '../Services/pintservice.service';

@Component({
  selector: 'app-softdrinks',
  templateUrl: './softdrinks.page.html',
  styleUrls: ['./softdrinks.page.scss'],
})
export class SoftdrinksPage implements OnInit {
softdrinks: any = [];
cart:any = [];
products:any = [];
cartItemCount: BehaviorSubject<number>;
  constructor(private Softdrinkservice: PintserviceService, private modalCtrl: ModalController) { }

  ngOnInit() {
     this.Softdrinkservice.GetSoftDrinkData().subscribe((data)=>{
       this.softdrinks = data.softdrinks;
       console.log(this.softdrinks);
     })

     this.products = this.Softdrinkservice.getSoftDrinkProducts();
    this.cart = this.Softdrinkservice.getCart();
    this.cartItemCount = this.Softdrinkservice.getCartItemCount();
    }

    addToCart(GetSoftDrinkData) {
      this.Softdrinkservice.addPint(GetSoftDrinkData);
    }

    async openCart()
  {
    let modal = await this.modalCtrl.create({
      component: CartPage,
      cssClass: 'cart-modal'
    });
    modal.present();
  }
  }
