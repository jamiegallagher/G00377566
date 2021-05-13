import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablenumbersPage } from './tablenumbers.page';

const routes: Routes = [
  {
    path: '',
    component: TablenumbersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablenumbersPageRoutingModule {}
