import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R129RoutingModule } from './r129-routing.module';
import { R129Component } from './r129.component';


@NgModule({
  declarations: [R129Component],
  imports: [
    CommonModule,
    R129RoutingModule
  ]
})
export class R129Module { }
