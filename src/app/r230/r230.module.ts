import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R230RoutingModule } from './r230-routing.module';
import { R230Component } from './r230.component';


@NgModule({
  declarations: [R230Component],
  imports: [
    CommonModule,
    R230RoutingModule
  ]
})
export class R230Module { }
