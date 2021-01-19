import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R290RoutingModule } from './r290-routing.module';
import { R290Component } from './r290.component';


@NgModule({
  declarations: [R290Component],
  imports: [
    CommonModule,
    R290RoutingModule
  ]
})
export class R290Module { }
