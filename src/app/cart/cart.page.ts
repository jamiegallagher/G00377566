import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {PintserviceService} from '../Services/pintservice.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cart: PintserviceService[] = [];
  constructor(private pintservice: PintserviceService, private modalCtrl: ModalController) {}

  ngOnInit() {
    this.cart = this.pintservice.getCart();
  }

  decreaseDraughtItem(draughts)
  {
    this.pintservice.decreasePint(draughts);
  }

  increaseDraughtItem(draughts)
  {
    this.pintservice.addPint(draughts);
  }

  removeDraughtItem(draughts)
  {
    this.pintservice.removePint(draughts);
  }

  getTotal()
  {
    //return this.cart.reduce(i, j) => i + j.price * j.amount, 0);
  }

  close()
  {
    this.modalCtrl.dismiss();
  }
}
