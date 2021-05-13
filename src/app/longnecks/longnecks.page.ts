import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartPage } from '../cart/cart.page';
import{PintserviceService} from '../Services/pintservice.service';
import { TablenumbersPage } from '../tablenumbers/tablenumbers.page';
@Component({
  selector: 'app-longnecks',
  templateUrl: './longnecks.page.html',
  styleUrls: ['./longnecks.page.scss'],
})
export class LongnecksPage implements OnInit {
cans: any = [];
longnecks: any = [];
cart:any = [];
products:any = [];
cartItemCount: BehaviorSubject<number>;

  constructor(private longneckservice:PintserviceService, private modalCtrl: ModalController) { }

  ngOnInit() 
  {
    this.longneckservice.GetLongneckData().subscribe((data)=>{
      this.cans = data.cans;
      this.longnecks = data.longnecks;
      console.log(this.cans);
      console.log(this.longnecks);
    })

    this.products = this.longneckservice.getLongneckProducts();
    this.cart = this.longneckservice.getCart();
    this.cartItemCount = this.longneckservice.getCartItemCount();
  }

  addToCart(GetLongneckData) {
    this.longneckservice.addPint(GetLongneckData);
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
