import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R264RoutingModule } from './r264-routing.module';
import { R264Component } from './r264.component';


@NgModule({
  declarations: [R264Component],
  imports: [
    CommonModule,
    R264RoutingModule
  ]
})
export class R264Module { }
