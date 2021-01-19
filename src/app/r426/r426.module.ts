import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R426RoutingModule } from './r426-routing.module';
import { R426Component } from './r426.component';


@NgModule({
  declarations: [R426Component],
  imports: [
    CommonModule,
    R426RoutingModule
  ]
})
export class R426Module { }
