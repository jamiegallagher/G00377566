import { Component, OnInit } from '@angular/core';
import {PintserviceService} from '../Services/pintservice.service';
import {Storage} from '@ionic/storage';
@Component({
  selector: 'app-draught',
  templateUrl: './draught.page.html',
  styleUrls: ['./draught.page.scss'],
})
export class DraughtPage implements OnInit {
draughts:any = [];
  constructor(private pintservice: PintserviceService, private storage:Storage) { }

  ngOnInit() {
    this.pintservice.GetPintData().subscribe((data)=>{
      this.draughts = data.draughts;
      console.log(this.draughts);
    })
  }

}
