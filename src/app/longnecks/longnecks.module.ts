import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LongnecksPageRoutingModule } from './longnecks-routing.module';

import { LongnecksPage } from './longnecks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LongnecksPageRoutingModule
  ],
  declarations: [LongnecksPage]
})
export class LongnecksPageModule {}
