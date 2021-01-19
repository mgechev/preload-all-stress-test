import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R456RoutingModule } from './r456-routing.module';
import { R456Component } from './r456.component';


@NgModule({
  declarations: [R456Component],
  imports: [
    CommonModule,
    R456RoutingModule
  ]
})
export class R456Module { }
