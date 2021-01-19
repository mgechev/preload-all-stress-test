import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R35RoutingModule } from './r35-routing.module';
import { R35Component } from './r35.component';


@NgModule({
  declarations: [R35Component],
  imports: [
    CommonModule,
    R35RoutingModule
  ]
})
export class R35Module { }
