import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R3RoutingModule } from './r3-routing.module';
import { R3Component } from './r3.component';


@NgModule({
  declarations: [R3Component],
  imports: [
    CommonModule,
    R3RoutingModule
  ]
})
export class R3Module { }
