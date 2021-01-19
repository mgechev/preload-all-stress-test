import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R408RoutingModule } from './r408-routing.module';
import { R408Component } from './r408.component';


@NgModule({
  declarations: [R408Component],
  imports: [
    CommonModule,
    R408RoutingModule
  ]
})
export class R408Module { }
