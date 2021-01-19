import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R417RoutingModule } from './r417-routing.module';
import { R417Component } from './r417.component';


@NgModule({
  declarations: [R417Component],
  imports: [
    CommonModule,
    R417RoutingModule
  ]
})
export class R417Module { }
