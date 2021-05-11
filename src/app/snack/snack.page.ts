import { Component, OnInit } from '@angular/core';
import {PintserviceService} from '../Services/pintservice.service';
@Component({
  selector: 'app-snack',
  templateUrl: './snack.page.html',
  styleUrls: ['./snack.page.scss'],
})
export class SnackPage implements OnInit {
snacks:any = [];
  constructor(private snackservice:PintserviceService) { }

  ngOnInit() 
  {
    this.snackservice.GetSnackData().subscribe((data)=> {
      this.snacks = data.snacks;
      console.log(this.snacks);
    })
  }

}
