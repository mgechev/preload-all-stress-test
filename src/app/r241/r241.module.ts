import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R241RoutingModule } from './r241-routing.module';
import { R241Component } from './r241.component';


@NgModule({
  declarations: [R241Component],
  imports: [
    CommonModule,
    R241RoutingModule
  ]
})
export class R241Module { }
