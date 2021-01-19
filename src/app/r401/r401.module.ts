import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R401RoutingModule } from './r401-routing.module';
import { R401Component } from './r401.component';


@NgModule({
  declarations: [R401Component],
  imports: [
    CommonModule,
    R401RoutingModule
  ]
})
export class R401Module { }
