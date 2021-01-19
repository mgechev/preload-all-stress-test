import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R95RoutingModule } from './r95-routing.module';
import { R95Component } from './r95.component';


@NgModule({
  declarations: [R95Component],
  imports: [
    CommonModule,
    R95RoutingModule
  ]
})
export class R95Module { }
