import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R128RoutingModule } from './r128-routing.module';
import { R128Component } from './r128.component';


@NgModule({
  declarations: [R128Component],
  imports: [
    CommonModule,
    R128RoutingModule
  ]
})
export class R128Module { }
