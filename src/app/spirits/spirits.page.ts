import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartPage } from '../cart/cart.page';
import {PintserviceService} from '../Services/pintservice.service';
@Component({
  selector: 'app-spirits',
  templateUrl: './spirits.page.html',
  styleUrls: ['./spirits.page.scss'],
})
export class SpiritsPage implements OnInit {
  spirits: any = [];
  cart:any = [];
  products:any = [];
  cartItemCount: BehaviorSubject<number>;
  constructor(private spiritservice: PintserviceService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.spiritservice.GetSpiritsData().subscribe((data)=>{
      this.spirits = data.spirits;
      console.log(this.spirits);
  })

  this.products = this.spiritservice.getSpiritsProducts();
    this.cart = this.spiritservice.getCart();
    this.cartItemCount = this.spiritservice.getCartItemCount();
}

addToCart(GetSpiritsData) {
  this.spiritservice.addPint(GetSpiritsData);
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
