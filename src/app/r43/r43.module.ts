import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R43RoutingModule } from './r43-routing.module';
import { R43Component } from './r43.component';


@NgModule({
  declarations: [R43Component],
  imports: [
    CommonModule,
    R43RoutingModule
  ]
})
export class R43Module { }
