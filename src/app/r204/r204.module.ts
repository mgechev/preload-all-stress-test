import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R204RoutingModule } from './r204-routing.module';
import { R204Component } from './r204.component';


@NgModule({
  declarations: [R204Component],
  imports: [
    CommonModule,
    R204RoutingModule
  ]
})
export class R204Module { }
