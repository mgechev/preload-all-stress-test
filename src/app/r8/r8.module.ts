import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R8RoutingModule } from './r8-routing.module';
import { R8Component } from './r8.component';


@NgModule({
  declarations: [R8Component],
  imports: [
    CommonModule,
    R8RoutingModule
  ]
})
export class R8Module { }
