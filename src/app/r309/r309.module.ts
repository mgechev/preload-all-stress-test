import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R309RoutingModule } from './r309-routing.module';
import { R309Component } from './r309.component';


@NgModule({
  declarations: [R309Component],
  imports: [
    CommonModule,
    R309RoutingModule
  ]
})
export class R309Module { }
