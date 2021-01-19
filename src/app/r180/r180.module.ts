import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R180RoutingModule } from './r180-routing.module';
import { R180Component } from './r180.component';


@NgModule({
  declarations: [R180Component],
  imports: [
    CommonModule,
    R180RoutingModule
  ]
})
export class R180Module { }
