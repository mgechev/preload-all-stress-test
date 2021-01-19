import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R185RoutingModule } from './r185-routing.module';
import { R185Component } from './r185.component';


@NgModule({
  declarations: [R185Component],
  imports: [
    CommonModule,
    R185RoutingModule
  ]
})
export class R185Module { }
