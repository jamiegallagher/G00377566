import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DraughtPageRoutingModule } from './draught-routing.module';

import { DraughtPage } from './draught.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DraughtPageRoutingModule
  ],
  declarations: [DraughtPage]
})
export class DraughtPageModule {}
