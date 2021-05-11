import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotdrinkPageRoutingModule } from './hotdrink-routing.module';

import { HotdrinkPage } from './hotdrink.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotdrinkPageRoutingModule
  ],
  declarations: [HotdrinkPage]
})
export class HotdrinkPageModule {}
