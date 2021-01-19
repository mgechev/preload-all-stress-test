import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R247RoutingModule } from './r247-routing.module';
import { R247Component } from './r247.component';


@NgModule({
  declarations: [R247Component],
  imports: [
    CommonModule,
    R247RoutingModule
  ]
})
export class R247Module { }
