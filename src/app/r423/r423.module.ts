import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R423RoutingModule } from './r423-routing.module';
import { R423Component } from './r423.component';


@NgModule({
  declarations: [R423Component],
  imports: [
    CommonModule,
    R423RoutingModule
  ]
})
export class R423Module { }
