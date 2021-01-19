import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R14RoutingModule } from './r14-routing.module';
import { R14Component } from './r14.component';


@NgModule({
  declarations: [R14Component],
  imports: [
    CommonModule,
    R14RoutingModule
  ]
})
export class R14Module { }
