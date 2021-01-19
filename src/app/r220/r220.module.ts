import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R220RoutingModule } from './r220-routing.module';
import { R220Component } from './r220.component';


@NgModule({
  declarations: [R220Component],
  imports: [
    CommonModule,
    R220RoutingModule
  ]
})
export class R220Module { }
