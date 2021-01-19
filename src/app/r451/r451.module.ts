import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R451RoutingModule } from './r451-routing.module';
import { R451Component } from './r451.component';


@NgModule({
  declarations: [R451Component],
  imports: [
    CommonModule,
    R451RoutingModule
  ]
})
export class R451Module { }
