import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R433RoutingModule } from './r433-routing.module';
import { R433Component } from './r433.component';


@NgModule({
  declarations: [R433Component],
  imports: [
    CommonModule,
    R433RoutingModule
  ]
})
export class R433Module { }
