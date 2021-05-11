import { Component, OnInit } from '@angular/core';
import {PintserviceService} from '../Services/pintservice.service';

@Component({
  selector: 'app-hotdrink',
  templateUrl: './hotdrink.page.html',
  styleUrls: ['./hotdrink.page.scss'],
})
export class HotdrinkPage implements OnInit {
hotdrinks:any = [];
  constructor(private hotdrink:PintserviceService) { }

  ngOnInit() 
  {
    this.hotdrink.GetHotDrinkData().subscribe((data)=>{
      this.hotdrinks = data.hotdrinks;
      console.log(this.hotdrinks);
    })
  }

}
