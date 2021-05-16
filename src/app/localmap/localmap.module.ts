import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocalmapPageRoutingModule } from './localmap-routing.module';

import { LocalmapPage } from './localmap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocalmapPageRoutingModule
  ],
  declarations: [LocalmapPage]
})
export class LocalmapPageModule {}
