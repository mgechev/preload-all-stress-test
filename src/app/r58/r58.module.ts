import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R58RoutingModule } from './r58-routing.module';
import { R58Component } from './r58.component';


@NgModule({
  declarations: [R58Component],
  imports: [
    CommonModule,
    R58RoutingModule
  ]
})
export class R58Module { }
