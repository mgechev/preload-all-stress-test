import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R7RoutingModule } from './r7-routing.module';
import { R7Component } from './r7.component';


@NgModule({
  declarations: [R7Component],
  imports: [
    CommonModule,
    R7RoutingModule
  ]
})
export class R7Module { }
