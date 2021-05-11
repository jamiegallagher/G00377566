import { Component, OnInit } from '@angular/core';
import{PintserviceService} from '../Services/pintservice.service'
@Component({
  selector: 'app-longnecks',
  templateUrl: './longnecks.page.html',
  styleUrls: ['./longnecks.page.scss'],
})
export class LongnecksPage implements OnInit {
cans: any = [];
longnecks: any = [];
  constructor(private longneckservice:PintserviceService) { }

  ngOnInit() 
  {
    this.longneckservice.GetLongneckData().subscribe((data)=>{
      this.cans = data.cans;
      this.longnecks = data.longnecks;
      console.log(this.cans);
      console.log(this.longnecks);
    })
  }

}
