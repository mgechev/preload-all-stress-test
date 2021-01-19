import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R481RoutingModule } from './r481-routing.module';
import { R481Component } from './r481.component';


@NgModule({
  declarations: [R481Component],
  imports: [
    CommonModule,
    R481RoutingModule
  ]
})
export class R481Module { }
