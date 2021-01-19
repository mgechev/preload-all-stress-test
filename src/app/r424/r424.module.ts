import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R424RoutingModule } from './r424-routing.module';
import { R424Component } from './r424.component';


@NgModule({
  declarations: [R424Component],
  imports: [
    CommonModule,
    R424RoutingModule
  ]
})
export class R424Module { }
