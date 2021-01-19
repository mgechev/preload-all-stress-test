import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R89RoutingModule } from './r89-routing.module';
import { R89Component } from './r89.component';


@NgModule({
  declarations: [R89Component],
  imports: [
    CommonModule,
    R89RoutingModule
  ]
})
export class R89Module { }
