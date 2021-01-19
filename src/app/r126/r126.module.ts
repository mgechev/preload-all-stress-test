import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R126RoutingModule } from './r126-routing.module';
import { R126Component } from './r126.component';


@NgModule({
  declarations: [R126Component],
  imports: [
    CommonModule,
    R126RoutingModule
  ]
})
export class R126Module { }
