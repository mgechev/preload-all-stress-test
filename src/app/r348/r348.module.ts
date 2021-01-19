import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R348RoutingModule } from './r348-routing.module';
import { R348Component } from './r348.component';


@NgModule({
  declarations: [R348Component],
  imports: [
    CommonModule,
    R348RoutingModule
  ]
})
export class R348Module { }
