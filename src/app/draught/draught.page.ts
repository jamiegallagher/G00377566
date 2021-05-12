import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {PintserviceService} from '../Services/pintservice.service';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartPage } from '../cart/cart.page';
@Component({
  selector: 'app-draught',
  templateUrl: './draught.page.html',
  styleUrls: ['./draught.page.scss'],
})
export class DraughtPage implements OnInit {
draughts:any = [];
cart:any = [];
products:any = [];
cartItemCount: BehaviorSubject<number>;

  constructor(private pintservice: PintserviceService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.pintservice.GetPintData().subscribe((data)=>{
      this.draughts = data.draughts;
      console.log(this.draughts);
    })

      this.products = this.pintservice.getPintProducts();

    this.cart = this.pintservice.getCart();
    this.cartItemCount = this.pintservice.getCartItemCount();
  }

  addToCart(GetPintData) {
    this.pintservice.addPint(GetPintData);
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
