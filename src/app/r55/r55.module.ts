import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R55RoutingModule } from './r55-routing.module';
import { R55Component } from './r55.component';


@NgModule({
  declarations: [R55Component],
  imports: [
    CommonModule,
    R55RoutingModule
  ]
})
export class R55Module { }
