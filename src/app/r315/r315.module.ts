import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R315RoutingModule } from './r315-routing.module';
import { R315Component } from './r315.component';


@NgModule({
  declarations: [R315Component],
  imports: [
    CommonModule,
    R315RoutingModule
  ]
})
export class R315Module { }
