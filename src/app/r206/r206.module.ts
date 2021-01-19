import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R206RoutingModule } from './r206-routing.module';
import { R206Component } from './r206.component';


@NgModule({
  declarations: [R206Component],
  imports: [
    CommonModule,
    R206RoutingModule
  ]
})
export class R206Module { }
