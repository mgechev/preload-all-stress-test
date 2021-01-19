import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R124RoutingModule } from './r124-routing.module';
import { R124Component } from './r124.component';


@NgModule({
  declarations: [R124Component],
  imports: [
    CommonModule,
    R124RoutingModule
  ]
})
export class R124Module { }
