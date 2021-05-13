import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TablenumbersPageRoutingModule } from './tablenumbers-routing.module';

import { TablenumbersPage } from './tablenumbers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TablenumbersPageRoutingModule
  ],
  declarations: [TablenumbersPage]
})
export class TablenumbersPageModule {}
