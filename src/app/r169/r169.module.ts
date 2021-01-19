import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R169RoutingModule } from './r169-routing.module';
import { R169Component } from './r169.component';


@NgModule({
  declarations: [R169Component],
  imports: [
    CommonModule,
    R169RoutingModule
  ]
})
export class R169Module { }
