import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R49RoutingModule } from './r49-routing.module';
import { R49Component } from './r49.component';


@NgModule({
  declarations: [R49Component],
  imports: [
    CommonModule,
    R49RoutingModule
  ]
})
export class R49Module { }
