import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R434RoutingModule } from './r434-routing.module';
import { R434Component } from './r434.component';


@NgModule({
  declarations: [R434Component],
  imports: [
    CommonModule,
    R434RoutingModule
  ]
})
export class R434Module { }
