import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R418RoutingModule } from './r418-routing.module';
import { R418Component } from './r418.component';


@NgModule({
  declarations: [R418Component],
  imports: [
    CommonModule,
    R418RoutingModule
  ]
})
export class R418Module { }
