import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R380RoutingModule } from './r380-routing.module';
import { R380Component } from './r380.component';


@NgModule({
  declarations: [R380Component],
  imports: [
    CommonModule,
    R380RoutingModule
  ]
})
export class R380Module { }
