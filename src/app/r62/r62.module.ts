import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R62RoutingModule } from './r62-routing.module';
import { R62Component } from './r62.component';


@NgModule({
  declarations: [R62Component],
  imports: [
    CommonModule,
    R62RoutingModule
  ]
})
export class R62Module { }
