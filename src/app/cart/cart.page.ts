import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {PintserviceService} from '../Services/pintservice.service';
import { TablenumbersPage } from '../tablenumbers/tablenumbers.page';
import {Storage} from '@ionic/storage';
import { CheckoutPage } from '../checkout/checkout.page';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cart: PintserviceService[] = [];
  myTable: string;
  constructor(private pintservice: PintserviceService, private modalCtrl: ModalController,
    private storage: Storage) {}

  ngOnInit() {
    this.cart = this.pintservice.getCart();

    this.storage.get("myTable")
    .then((data) => {
      this.myTable = data;
    })
    .catch ();
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
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }

  close()
  {
    this.modalCtrl.dismiss();
  }

  async checkout()
  {
    let modal = await this.modalCtrl.create({
      component: CheckoutPage,
      cssClass: 'checkout-modal'
    });
    modal.present();
  }
}

