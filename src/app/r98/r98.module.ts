import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R98RoutingModule } from './r98-routing.module';
import { R98Component } from './r98.component';


@NgModule({
  declarations: [R98Component],
  imports: [
    CommonModule,
    R98RoutingModule
  ]
})
export class R98Module { }
