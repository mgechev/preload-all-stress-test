import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R192RoutingModule } from './r192-routing.module';
import { R192Component } from './r192.component';


@NgModule({
  declarations: [R192Component],
  imports: [
    CommonModule,
    R192RoutingModule
  ]
})
export class R192Module { }
