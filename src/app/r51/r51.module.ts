import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R51RoutingModule } from './r51-routing.module';
import { R51Component } from './r51.component';


@NgModule({
  declarations: [R51Component],
  imports: [
    CommonModule,
    R51RoutingModule
  ]
})
export class R51Module { }
