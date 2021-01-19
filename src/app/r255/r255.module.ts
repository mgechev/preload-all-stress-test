import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R255RoutingModule } from './r255-routing.module';
import { R255Component } from './r255.component';


@NgModule({
  declarations: [R255Component],
  imports: [
    CommonModule,
    R255RoutingModule
  ]
})
export class R255Module { }
