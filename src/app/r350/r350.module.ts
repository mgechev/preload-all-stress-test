import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R350RoutingModule } from './r350-routing.module';
import { R350Component } from './r350.component';


@NgModule({
  declarations: [R350Component],
  imports: [
    CommonModule,
    R350RoutingModule
  ]
})
export class R350Module { }
