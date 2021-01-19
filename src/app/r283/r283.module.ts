import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R283RoutingModule } from './r283-routing.module';
import { R283Component } from './r283.component';


@NgModule({
  declarations: [R283Component],
  imports: [
    CommonModule,
    R283RoutingModule
  ]
})
export class R283Module { }
