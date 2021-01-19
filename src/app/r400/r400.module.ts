import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R400RoutingModule } from './r400-routing.module';
import { R400Component } from './r400.component';


@NgModule({
  declarations: [R400Component],
  imports: [
    CommonModule,
    R400RoutingModule
  ]
})
export class R400Module { }
