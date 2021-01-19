import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R39RoutingModule } from './r39-routing.module';
import { R39Component } from './r39.component';


@NgModule({
  declarations: [R39Component],
  imports: [
    CommonModule,
    R39RoutingModule
  ]
})
export class R39Module { }
