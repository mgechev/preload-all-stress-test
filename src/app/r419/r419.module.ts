import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R419RoutingModule } from './r419-routing.module';
import { R419Component } from './r419.component';


@NgModule({
  declarations: [R419Component],
  imports: [
    CommonModule,
    R419RoutingModule
  ]
})
export class R419Module { }
