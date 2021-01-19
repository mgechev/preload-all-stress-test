import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R71RoutingModule } from './r71-routing.module';
import { R71Component } from './r71.component';


@NgModule({
  declarations: [R71Component],
  imports: [
    CommonModule,
    R71RoutingModule
  ]
})
export class R71Module { }
