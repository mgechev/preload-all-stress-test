import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R234RoutingModule } from './r234-routing.module';
import { R234Component } from './r234.component';


@NgModule({
  declarations: [R234Component],
  imports: [
    CommonModule,
    R234RoutingModule
  ]
})
export class R234Module { }
