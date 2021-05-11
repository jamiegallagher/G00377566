import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotdrinkPage } from './hotdrink.page';

const routes: Routes = [
  {
    path: '',
    component: HotdrinkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotdrinkPageRoutingModule {}
