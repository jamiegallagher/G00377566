import { Component, OnInit } from '@angular/core';
import {PintserviceService} from './Services/pintservice.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  draught: any [];
  public appPages = [
    { title: 'Home', url: '/folder', icon: "home" },
    { title: 'Draught', url: '/draught', icon: 'beer' },
    { title: 'Soft Drinks', url: '/folder/softdrinks', icon: 'pint' },
    { title: 'Wines & Spirits', url: '/folder/spirits', icon: 'wine' },
    { title: 'Snacks', url: '/folder/snack', icon: 'restaurant' },
    { title: 'Hot Drinks', url: '/folder/hotdrink', icon: 'cafe' },
    { title: 'Cart', url: '/folder/cart', icon: 'cart'},
  ];
  constructor(private service:PintserviceService) {}

  ngOnInit()
  {
    this.service.GetPintData().subscribe((data)=>{
      this.draught = data.draught;
      console.log(this.draught);
    });
  }
}
