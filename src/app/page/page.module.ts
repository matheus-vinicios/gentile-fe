import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PageRoutingModule } from './page-routing.module';
import { InicialComponent } from './inicial/inicial.component';

@NgModule
(
  {
    declarations:
    [
      InicialComponent
    ],
    imports:
    [
      CommonModule,
      ReactiveFormsModule,
      PageRoutingModule
    ]
  }
)
export class PageModule
{

}