import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R146RoutingModule } from './r146-routing.module';
import { R146Component } from './r146.component';


@NgModule({
  declarations: [R146Component],
  imports: [
    CommonModule,
    R146RoutingModule
  ]
})
export class R146Module { }
