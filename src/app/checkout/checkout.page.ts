import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {PintserviceService} from '../Services/pintservice.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  checkout: PintserviceService[] = [];
  constructor(private modalCtrl: ModalController, private pintservice: PintserviceService) { }

  ngOnInit() {
    this.checkout = this.pintservice.getCart();
  }
  close()
  {
    this.modalCtrl.dismiss();
  }

  getTotal()
  {
    return this.checkout.reduce((i, j) => i + j.price * j.amount, 0);
  }

  }
