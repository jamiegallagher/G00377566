import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpiritsPageRoutingModule } from './spirits-routing.module';

import { SpiritsPage } from './spirits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpiritsPageRoutingModule
  ],
  declarations: [SpiritsPage]
})
export class SpiritsPageModule {}
