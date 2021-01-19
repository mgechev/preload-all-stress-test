import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R200RoutingModule } from './r200-routing.module';
import { R200Component } from './r200.component';


@NgModule({
  declarations: [R200Component],
  imports: [
    CommonModule,
    R200RoutingModule
  ]
})
export class R200Module { }
