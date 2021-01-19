import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R458RoutingModule } from './r458-routing.module';
import { R458Component } from './r458.component';


@NgModule({
  declarations: [R458Component],
  imports: [
    CommonModule,
    R458RoutingModule
  ]
})
export class R458Module { }
