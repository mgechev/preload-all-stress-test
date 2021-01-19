import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R429RoutingModule } from './r429-routing.module';
import { R429Component } from './r429.component';


@NgModule({
  declarations: [R429Component],
  imports: [
    CommonModule,
    R429RoutingModule
  ]
})
export class R429Module { }
