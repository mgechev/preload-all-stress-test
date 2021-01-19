import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R208RoutingModule } from './r208-routing.module';
import { R208Component } from './r208.component';


@NgModule({
  declarations: [R208Component],
  imports: [
    CommonModule,
    R208RoutingModule
  ]
})
export class R208Module { }
