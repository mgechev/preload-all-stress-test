import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R354RoutingModule } from './r354-routing.module';
import { R354Component } from './r354.component';


@NgModule({
  declarations: [R354Component],
  imports: [
    CommonModule,
    R354RoutingModule
  ]
})
export class R354Module { }
