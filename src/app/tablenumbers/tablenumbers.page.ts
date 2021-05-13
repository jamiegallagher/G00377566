import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {Storage} from '@ionic/storage';
import {NavController} from '@ionic/angular';
import { CartPage } from '../cart/cart.page';

@Component({
  selector: 'app-tablenumbers',
  templateUrl: './tablenumbers.page.html',
  styleUrls: ['./tablenumbers.page.scss'],
})
export class TablenumbersPage implements OnInit {
  myTable: string;
  constructor(private modalCtrl: ModalController, private storage: Storage, private navCtrl: NavController) { }

  ngOnInit() {
    this.storage.get("myTable")
    .then((data) => {
      this.myTable = data;
    })
    .catch();
  }

 saveTable()
  {
    console.log(this.myTable);
    this.storage.set("myTable", this.myTable)
    .then(
      async () => {
        let modal = await this.modalCtrl.create({
          component: CartPage,
          cssClass: 'cart-modal'
        });
        modal.present();
      })
      .catch();
  }
  close()
  {
    this.modalCtrl.dismiss();
  }
}
