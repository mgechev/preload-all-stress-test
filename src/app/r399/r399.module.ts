import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R399RoutingModule } from './r399-routing.module';
import { R399Component } from './r399.component';


@NgModule({
  declarations: [R399Component],
  imports: [
    CommonModule,
    R399RoutingModule
  ]
})
export class R399Module { }
