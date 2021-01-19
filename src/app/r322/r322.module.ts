import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R322RoutingModule } from './r322-routing.module';
import { R322Component } from './r322.component';


@NgModule({
  declarations: [R322Component],
  imports: [
    CommonModule,
    R322RoutingModule
  ]
})
export class R322Module { }
