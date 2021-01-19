import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R162RoutingModule } from './r162-routing.module';
import { R162Component } from './r162.component';


@NgModule({
  declarations: [R162Component],
  imports: [
    CommonModule,
    R162RoutingModule
  ]
})
export class R162Module { }
