import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R351RoutingModule } from './r351-routing.module';
import { R351Component } from './r351.component';


@NgModule({
  declarations: [R351Component],
  imports: [
    CommonModule,
    R351RoutingModule
  ]
})
export class R351Module { }
