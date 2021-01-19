import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R76RoutingModule } from './r76-routing.module';
import { R76Component } from './r76.component';


@NgModule({
  declarations: [R76Component],
  imports: [
    CommonModule,
    R76RoutingModule
  ]
})
export class R76Module { }
