import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoftdrinksPage } from './softdrinks.page';

const routes: Routes = [
  {
    path: '',
    component: SoftdrinksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoftdrinksPageRoutingModule {}
