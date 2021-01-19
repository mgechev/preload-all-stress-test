import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R301RoutingModule } from './r301-routing.module';
import { R301Component } from './r301.component';


@NgModule({
  declarations: [R301Component],
  imports: [
    CommonModule,
    R301RoutingModule
  ]
})
export class R301Module { }
