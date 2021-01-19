import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R172RoutingModule } from './r172-routing.module';
import { R172Component } from './r172.component';


@NgModule({
  declarations: [R172Component],
  imports: [
    CommonModule,
    R172RoutingModule
  ]
})
export class R172Module { }
