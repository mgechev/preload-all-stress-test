import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R412RoutingModule } from './r412-routing.module';
import { R412Component } from './r412.component';


@NgModule({
  declarations: [R412Component],
  imports: [
    CommonModule,
    R412RoutingModule
  ]
})
export class R412Module { }
