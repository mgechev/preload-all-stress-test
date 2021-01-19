import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R23RoutingModule } from './r23-routing.module';
import { R23Component } from './r23.component';


@NgModule({
  declarations: [R23Component],
  imports: [
    CommonModule,
    R23RoutingModule
  ]
})
export class R23Module { }
