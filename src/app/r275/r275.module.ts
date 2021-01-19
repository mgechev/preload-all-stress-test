import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R275RoutingModule } from './r275-routing.module';
import { R275Component } from './r275.component';


@NgModule({
  declarations: [R275Component],
  imports: [
    CommonModule,
    R275RoutingModule
  ]
})
export class R275Module { }
