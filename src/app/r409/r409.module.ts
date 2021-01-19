import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R409RoutingModule } from './r409-routing.module';
import { R409Component } from './r409.component';


@NgModule({
  declarations: [R409Component],
  imports: [
    CommonModule,
    R409RoutingModule
  ]
})
export class R409Module { }
