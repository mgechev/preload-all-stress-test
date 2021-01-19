import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R318RoutingModule } from './r318-routing.module';
import { R318Component } from './r318.component';


@NgModule({
  declarations: [R318Component],
  imports: [
    CommonModule,
    R318RoutingModule
  ]
})
export class R318Module { }
