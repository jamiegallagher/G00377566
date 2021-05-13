import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'draught',
    loadChildren: () => import('./draught/draught.module').then( m => m.DraughtPageModule)
  },
  {
    path: 'softdrinks',
    loadChildren: () => import('./softdrinks/softdrinks.module').then( m => m.SoftdrinksPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'longnecks',
    loadChildren: () => import('./longnecks/longnecks.module').then( m => m.LongnecksPageModule)
  },
  {
    path: 'spirits',
    loadChildren: () => import('./spirits/spirits.module').then( m => m.SpiritsPageModule)
  },
  {
    path: 'snack',
    loadChildren: () => import('./snack/snack.module').then( m => m.SnackPageModule)
  },
  {
    path: 'hotdrink',
    loadChildren: () => import('./hotdrink/hotdrink.module').then( m => m.HotdrinkPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'tablenumbers',
    loadChildren: () => import('./tablenumbers/tablenumbers.module').then( m => m.TablenumbersPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
