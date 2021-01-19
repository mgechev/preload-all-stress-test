import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R131RoutingModule } from './r131-routing.module';
import { R131Component } from './r131.component';


@NgModule({
  declarations: [R131Component],
  imports: [
    CommonModule,
    R131RoutingModule
  ]
})
export class R131Module { }
