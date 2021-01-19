import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R329RoutingModule } from './r329-routing.module';
import { R329Component } from './r329.component';


@NgModule({
  declarations: [R329Component],
  imports: [
    CommonModule,
    R329RoutingModule
  ]
})
export class R329Module { }
