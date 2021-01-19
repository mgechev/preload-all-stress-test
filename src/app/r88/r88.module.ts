import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R88RoutingModule } from './r88-routing.module';
import { R88Component } from './r88.component';


@NgModule({
  declarations: [R88Component],
  imports: [
    CommonModule,
    R88RoutingModule
  ]
})
export class R88Module { }
