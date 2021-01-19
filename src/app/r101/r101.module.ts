import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R101RoutingModule } from './r101-routing.module';
import { R101Component } from './r101.component';


@NgModule({
  declarations: [R101Component],
  imports: [
    CommonModule,
    R101RoutingModule
  ]
})
export class R101Module { }
