import { Component, OnInit } from '@angular/core';
import{LongnecksService} from '../Service/longnecks.service';
@Component({
  selector: 'app-longnecks',
  templateUrl: './longnecks.page.html',
  styleUrls: ['./longnecks.page.scss'],
})
export class LongnecksPage implements OnInit {
cans: any = [];
longnecks: any = [];
  constructor(private longneckservice:LongnecksService) { }

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
