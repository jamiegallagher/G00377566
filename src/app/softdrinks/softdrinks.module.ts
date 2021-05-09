import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoftdrinksPageRoutingModule } from './softdrinks-routing.module';

import { SoftdrinksPage } from './softdrinks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoftdrinksPageRoutingModule
  ],
  declarations: [SoftdrinksPage]
})
export class SoftdrinksPageModule {}
