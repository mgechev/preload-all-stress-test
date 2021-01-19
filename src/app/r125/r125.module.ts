import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R125RoutingModule } from './r125-routing.module';
import { R125Component } from './r125.component';


@NgModule({
  declarations: [R125Component],
  imports: [
    CommonModule,
    R125RoutingModule
  ]
})
export class R125Module { }
