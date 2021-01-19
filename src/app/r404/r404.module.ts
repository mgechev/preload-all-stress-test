import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R404RoutingModule } from './r404-routing.module';
import { R404Component } from './r404.component';


@NgModule({
  declarations: [R404Component],
  imports: [
    CommonModule,
    R404RoutingModule
  ]
})
export class R404Module { }
