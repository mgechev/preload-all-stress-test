import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R145RoutingModule } from './r145-routing.module';
import { R145Component } from './r145.component';


@NgModule({
  declarations: [R145Component],
  imports: [
    CommonModule,
    R145RoutingModule
  ]
})
export class R145Module { }
