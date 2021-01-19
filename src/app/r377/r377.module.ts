import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R377RoutingModule } from './r377-routing.module';
import { R377Component } from './r377.component';


@NgModule({
  declarations: [R377Component],
  imports: [
    CommonModule,
    R377RoutingModule
  ]
})
export class R377Module { }
