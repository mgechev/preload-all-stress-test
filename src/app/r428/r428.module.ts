import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R428RoutingModule } from './r428-routing.module';
import { R428Component } from './r428.component';


@NgModule({
  declarations: [R428Component],
  imports: [
    CommonModule,
    R428RoutingModule
  ]
})
export class R428Module { }
