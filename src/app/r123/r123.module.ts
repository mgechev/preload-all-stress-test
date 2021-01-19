import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R123RoutingModule } from './r123-routing.module';
import { R123Component } from './r123.component';


@NgModule({
  declarations: [R123Component],
  imports: [
    CommonModule,
    R123RoutingModule
  ]
})
export class R123Module { }
