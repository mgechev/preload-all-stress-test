import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R300RoutingModule } from './r300-routing.module';
import { R300Component } from './r300.component';


@NgModule({
  declarations: [R300Component],
  imports: [
    CommonModule,
    R300RoutingModule
  ]
})
export class R300Module { }
