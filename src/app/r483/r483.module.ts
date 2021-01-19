import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R483RoutingModule } from './r483-routing.module';
import { R483Component } from './r483.component';


@NgModule({
  declarations: [R483Component],
  imports: [
    CommonModule,
    R483RoutingModule
  ]
})
export class R483Module { }
