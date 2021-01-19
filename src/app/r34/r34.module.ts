import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R34RoutingModule } from './r34-routing.module';
import { R34Component } from './r34.component';


@NgModule({
  declarations: [R34Component],
  imports: [
    CommonModule,
    R34RoutingModule
  ]
})
export class R34Module { }
