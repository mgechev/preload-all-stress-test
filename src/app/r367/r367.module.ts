import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R367RoutingModule } from './r367-routing.module';
import { R367Component } from './r367.component';


@NgModule({
  declarations: [R367Component],
  imports: [
    CommonModule,
    R367RoutingModule
  ]
})
export class R367Module { }
