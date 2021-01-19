import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R40RoutingModule } from './r40-routing.module';
import { R40Component } from './r40.component';


@NgModule({
  declarations: [R40Component],
  imports: [
    CommonModule,
    R40RoutingModule
  ]
})
export class R40Module { }
