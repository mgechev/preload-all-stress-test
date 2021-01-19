import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R223RoutingModule } from './r223-routing.module';
import { R223Component } from './r223.component';


@NgModule({
  declarations: [R223Component],
  imports: [
    CommonModule,
    R223RoutingModule
  ]
})
export class R223Module { }
