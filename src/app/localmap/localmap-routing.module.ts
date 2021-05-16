import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalmapPage } from './localmap.page';

const routes: Routes = [
  {
    path: '',
    component: LocalmapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalmapPageRoutingModule {}
