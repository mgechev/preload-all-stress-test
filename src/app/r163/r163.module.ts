import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R163RoutingModule } from './r163-routing.module';
import { R163Component } from './r163.component';


@NgModule({
  declarations: [R163Component],
  imports: [
    CommonModule,
    R163RoutingModule
  ]
})
export class R163Module { }
