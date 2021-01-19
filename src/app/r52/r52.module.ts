import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R52RoutingModule } from './r52-routing.module';
import { R52Component } from './r52.component';


@NgModule({
  declarations: [R52Component],
  imports: [
    CommonModule,
    R52RoutingModule
  ]
})
export class R52Module { }
