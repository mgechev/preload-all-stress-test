import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R386RoutingModule } from './r386-routing.module';
import { R386Component } from './r386.component';


@NgModule({
  declarations: [R386Component],
  imports: [
    CommonModule,
    R386RoutingModule
  ]
})
export class R386Module { }
