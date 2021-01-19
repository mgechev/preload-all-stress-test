import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R36RoutingModule } from './r36-routing.module';
import { R36Component } from './r36.component';


@NgModule({
  declarations: [R36Component],
  imports: [
    CommonModule,
    R36RoutingModule
  ]
})
export class R36Module { }
