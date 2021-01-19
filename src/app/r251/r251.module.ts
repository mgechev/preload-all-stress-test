import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R251RoutingModule } from './r251-routing.module';
import { R251Component } from './r251.component';


@NgModule({
  declarations: [R251Component],
  imports: [
    CommonModule,
    R251RoutingModule
  ]
})
export class R251Module { }
