import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DraughtPage } from './draught.page';

const routes: Routes = [
  {
    path: '',
    component: DraughtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DraughtPageRoutingModule {}
