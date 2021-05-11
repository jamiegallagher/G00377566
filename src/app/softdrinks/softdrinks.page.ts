import { Component, OnInit } from '@angular/core';
import {PintserviceService} from '../Services/pintservice.service';

@Component({
  selector: 'app-softdrinks',
  templateUrl: './softdrinks.page.html',
  styleUrls: ['./softdrinks.page.scss'],
})
export class SoftdrinksPage implements OnInit {
softdrinks: any = [];
  constructor(private Softdrinkservice: PintserviceService) { }

  ngOnInit() {
     this.Softdrinkservice.GetSoftDrinkData().subscribe((data)=>{
       this.softdrinks = data.softdrinks;
       console.log(this.softdrinks);
     })
    }
  }
