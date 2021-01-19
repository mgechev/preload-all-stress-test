import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R44RoutingModule } from './r44-routing.module';
import { R44Component } from './r44.component';


@NgModule({
  declarations: [R44Component],
  imports: [
    CommonModule,
    R44RoutingModule
  ]
})
export class R44Module { }
