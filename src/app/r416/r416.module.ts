import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R416RoutingModule } from './r416-routing.module';
import { R416Component } from './r416.component';


@NgModule({
  declarations: [R416Component],
  imports: [
    CommonModule,
    R416RoutingModule
  ]
})
export class R416Module { }
