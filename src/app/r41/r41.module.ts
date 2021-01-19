import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R41RoutingModule } from './r41-routing.module';
import { R41Component } from './r41.component';


@NgModule({
  declarations: [R41Component],
  imports: [
    CommonModule,
    R41RoutingModule
  ]
})
export class R41Module { }
