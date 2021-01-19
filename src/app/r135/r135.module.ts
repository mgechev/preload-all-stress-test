import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R135RoutingModule } from './r135-routing.module';
import { R135Component } from './r135.component';


@NgModule({
  declarations: [R135Component],
  imports: [
    CommonModule,
    R135RoutingModule
  ]
})
export class R135Module { }
