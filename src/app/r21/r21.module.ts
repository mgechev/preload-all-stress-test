import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R21RoutingModule } from './r21-routing.module';
import { R21Component } from './r21.component';


@NgModule({
  declarations: [R21Component],
  imports: [
    CommonModule,
    R21RoutingModule
  ]
})
export class R21Module { }
