import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R216RoutingModule } from './r216-routing.module';
import { R216Component } from './r216.component';


@NgModule({
  declarations: [R216Component],
  imports: [
    CommonModule,
    R216RoutingModule
  ]
})
export class R216Module { }
