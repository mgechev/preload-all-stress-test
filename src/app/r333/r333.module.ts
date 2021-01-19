import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R333RoutingModule } from './r333-routing.module';
import { R333Component } from './r333.component';


@NgModule({
  declarations: [R333Component],
  imports: [
    CommonModule,
    R333RoutingModule
  ]
})
export class R333Module { }
