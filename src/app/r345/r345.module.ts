import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R345RoutingModule } from './r345-routing.module';
import { R345Component } from './r345.component';


@NgModule({
  declarations: [R345Component],
  imports: [
    CommonModule,
    R345RoutingModule
  ]
})
export class R345Module { }
