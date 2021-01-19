import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R31RoutingModule } from './r31-routing.module';
import { R31Component } from './r31.component';


@NgModule({
  declarations: [R31Component],
  imports: [
    CommonModule,
    R31RoutingModule
  ]
})
export class R31Module { }
