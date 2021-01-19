import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R271RoutingModule } from './r271-routing.module';
import { R271Component } from './r271.component';


@NgModule({
  declarations: [R271Component],
  imports: [
    CommonModule,
    R271RoutingModule
  ]
})
export class R271Module { }
