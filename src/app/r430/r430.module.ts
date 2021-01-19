import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R430RoutingModule } from './r430-routing.module';
import { R430Component } from './r430.component';


@NgModule({
  declarations: [R430Component],
  imports: [
    CommonModule,
    R430RoutingModule
  ]
})
export class R430Module { }
