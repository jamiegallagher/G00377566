import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LongnecksPage } from './longnecks.page';

const routes: Routes = [
  {
    path: '',
    component: LongnecksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LongnecksPageRoutingModule {}
