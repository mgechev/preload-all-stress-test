import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R93RoutingModule } from './r93-routing.module';
import { R93Component } from './r93.component';


@NgModule({
  declarations: [R93Component],
  imports: [
    CommonModule,
    R93RoutingModule
  ]
})
export class R93Module { }
