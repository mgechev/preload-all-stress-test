import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R213RoutingModule } from './r213-routing.module';
import { R213Component } from './r213.component';


@NgModule({
  declarations: [R213Component],
  imports: [
    CommonModule,
    R213RoutingModule
  ]
})
export class R213Module { }
