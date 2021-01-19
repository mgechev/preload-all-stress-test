import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R281RoutingModule } from './r281-routing.module';
import { R281Component } from './r281.component';


@NgModule({
  declarations: [R281Component],
  imports: [
    CommonModule,
    R281RoutingModule
  ]
})
export class R281Module { }
