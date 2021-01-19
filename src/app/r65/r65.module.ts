import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R65RoutingModule } from './r65-routing.module';
import { R65Component } from './r65.component';


@NgModule({
  declarations: [R65Component],
  imports: [
    CommonModule,
    R65RoutingModule
  ]
})
export class R65Module { }
