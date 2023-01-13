import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { LayoutComponent } from './core';

const routes: Routes =
[
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () => import('./page/page.module').then(m => m.PageModule)
  }
];

@NgModule
(
  {
    imports:
    [
      RouterModule.forRoot(routes)
    ],
    exports:
    [
      RouterModule
    ]
  }
)
export class AppRoutingModule
{

}