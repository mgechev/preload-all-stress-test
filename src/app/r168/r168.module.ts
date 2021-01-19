import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R168RoutingModule } from './r168-routing.module';
import { R168Component } from './r168.component';


@NgModule({
  declarations: [R168Component],
  imports: [
    CommonModule,
    R168RoutingModule
  ]
})
export class R168Module { }
