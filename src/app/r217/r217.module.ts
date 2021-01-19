import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R217RoutingModule } from './r217-routing.module';
import { R217Component } from './r217.component';


@NgModule({
  declarations: [R217Component],
  imports: [
    CommonModule,
    R217RoutingModule
  ]
})
export class R217Module { }
