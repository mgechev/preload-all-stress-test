import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R48RoutingModule } from './r48-routing.module';
import { R48Component } from './r48.component';


@NgModule({
  declarations: [R48Component],
  imports: [
    CommonModule,
    R48RoutingModule
  ]
})
export class R48Module { }
