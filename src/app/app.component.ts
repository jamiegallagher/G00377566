import { Component} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent{
  public appPages = [
    { title: 'Home', url: '/folder/home', icon: "home" },
    { title: 'Draught', url: '/draught', icon: 'beer' },
    { title: 'Soft Drinks', url: '/softdrinks', icon: 'pint' },
    { title: 'Longnecks & Cans', url: '/longnecks', icon: 'water'},
    { title: 'Wines & Spirits', url: '/spirits', icon: 'wine' },
    { title: 'Snacks', url: '/snack', icon: 'restaurant' },
    { title: 'Hot Drinks', url: '/hotdrink', icon: 'cafe' },
    { title: 'Cart', url: '/cart', icon: 'cart'},
  ];
  constructor() {}
}
