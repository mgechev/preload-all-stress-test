import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R210RoutingModule } from './r210-routing.module';
import { R210Component } from './r210.component';


@NgModule({
  declarations: [R210Component],
  imports: [
    CommonModule,
    R210RoutingModule
  ]
})
export class R210Module { }
