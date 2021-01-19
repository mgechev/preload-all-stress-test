import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R302RoutingModule } from './r302-routing.module';
import { R302Component } from './r302.component';


@NgModule({
  declarations: [R302Component],
  imports: [
    CommonModule,
    R302RoutingModule
  ]
})
export class R302Module { }
