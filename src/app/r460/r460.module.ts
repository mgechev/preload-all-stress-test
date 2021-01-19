import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R460RoutingModule } from './r460-routing.module';
import { R460Component } from './r460.component';


@NgModule({
  declarations: [R460Component],
  imports: [
    CommonModule,
    R460RoutingModule
  ]
})
export class R460Module { }
