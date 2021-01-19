import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R100RoutingModule } from './r100-routing.module';
import { R100Component } from './r100.component';


@NgModule({
  declarations: [R100Component],
  imports: [
    CommonModule,
    R100RoutingModule
  ]
})
export class R100Module { }
