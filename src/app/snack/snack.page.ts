import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartPage } from '../cart/cart.page';
import {PintserviceService} from '../Services/pintservice.service';
@Component({
  selector: 'app-snack',
  templateUrl: './snack.page.html',
  styleUrls: ['./snack.page.scss'],
})
export class SnackPage implements OnInit {
snacks:any = [];
cart:any = [];
products:any = [];
cartItemCount: BehaviorSubject<number>;

  constructor(private snackservice:PintserviceService, private modalCtrl: ModalController) { }

  ngOnInit() 
  {
    this.snackservice.GetSnackData().subscribe((data)=> {
      this.snacks = data.snacks;
      console.log(this.snacks);
    })

    this.products = this.snackservice.getSnackProducts();
    this.cart = this.snackservice.getCart();
    this.cartItemCount = this.snackservice.getCartItemCount();
  }

  addToCart(GetSnackData) {
    this.snackservice.addPint(GetSnackData);
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
