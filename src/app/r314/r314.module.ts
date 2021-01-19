import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R314RoutingModule } from './r314-routing.module';
import { R314Component } from './r314.component';


@NgModule({
  declarations: [R314Component],
  imports: [
    CommonModule,
    R314RoutingModule
  ]
})
export class R314Module { }
