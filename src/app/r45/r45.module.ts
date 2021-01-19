import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R45RoutingModule } from './r45-routing.module';
import { R45Component } from './r45.component';


@NgModule({
  declarations: [R45Component],
  imports: [
    CommonModule,
    R45RoutingModule
  ]
})
export class R45Module { }
