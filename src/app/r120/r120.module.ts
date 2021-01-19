import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R120RoutingModule } from './r120-routing.module';
import { R120Component } from './r120.component';


@NgModule({
  declarations: [R120Component],
  imports: [
    CommonModule,
    R120RoutingModule
  ]
})
export class R120Module { }
