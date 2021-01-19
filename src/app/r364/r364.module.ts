import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R364RoutingModule } from './r364-routing.module';
import { R364Component } from './r364.component';


@NgModule({
  declarations: [R364Component],
  imports: [
    CommonModule,
    R364RoutingModule
  ]
})
export class R364Module { }
