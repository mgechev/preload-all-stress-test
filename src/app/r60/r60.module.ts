import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R60RoutingModule } from './r60-routing.module';
import { R60Component } from './r60.component';


@NgModule({
  declarations: [R60Component],
  imports: [
    CommonModule,
    R60RoutingModule
  ]
})
export class R60Module { }
