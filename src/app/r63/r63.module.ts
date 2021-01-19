import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R63RoutingModule } from './r63-routing.module';
import { R63Component } from './r63.component';


@NgModule({
  declarations: [R63Component],
  imports: [
    CommonModule,
    R63RoutingModule
  ]
})
export class R63Module { }
