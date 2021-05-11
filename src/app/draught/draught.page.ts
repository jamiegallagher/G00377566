import { Component, OnInit } from '@angular/core';
import {PintserviceService} from '../Services/pintservice.service';
import {Storage} from '@ionic/storage';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-draught',
  templateUrl: './draught.page.html',
  styleUrls: ['./draught.page.scss'],
})
export class DraughtPage implements OnInit {
draughts:any = [];
quantity2:any;
  constructor(private pintservice: PintserviceService, private storage:Storage, private NavCtrl: NavController) { }

  ngOnInit() {
    this.pintservice.GetPintData().subscribe((data)=>{
      this.draughts = data.draughts;
      console.log(this.draughts);
    })
  }

  //UpdateCart()
 // {
   // this.storage.set('quantity',this.quantity)
   // .then(()=>{
   //   this.NavCtrl.navigateBack('/cart');
  //  })
   // .catch()
 // }

}
