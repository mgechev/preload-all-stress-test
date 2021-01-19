import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R29RoutingModule } from './r29-routing.module';
import { R29Component } from './r29.component';


@NgModule({
  declarations: [R29Component],
  imports: [
    CommonModule,
    R29RoutingModule
  ]
})
export class R29Module { }
