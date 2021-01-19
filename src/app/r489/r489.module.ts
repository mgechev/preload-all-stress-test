import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R489RoutingModule } from './r489-routing.module';
import { R489Component } from './r489.component';


@NgModule({
  declarations: [R489Component],
  imports: [
    CommonModule,
    R489RoutingModule
  ]
})
export class R489Module { }
