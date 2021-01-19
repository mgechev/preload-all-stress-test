import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R38RoutingModule } from './r38-routing.module';
import { R38Component } from './r38.component';


@NgModule({
  declarations: [R38Component],
  imports: [
    CommonModule,
    R38RoutingModule
  ]
})
export class R38Module { }
