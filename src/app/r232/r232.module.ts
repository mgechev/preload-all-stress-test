import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R232RoutingModule } from './r232-routing.module';
import { R232Component } from './r232.component';


@NgModule({
  declarations: [R232Component],
  imports: [
    CommonModule,
    R232RoutingModule
  ]
})
export class R232Module { }
