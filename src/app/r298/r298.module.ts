import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R298RoutingModule } from './r298-routing.module';
import { R298Component } from './r298.component';


@NgModule({
  declarations: [R298Component],
  imports: [
    CommonModule,
    R298RoutingModule
  ]
})
export class R298Module { }
