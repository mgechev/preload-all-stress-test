import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R186RoutingModule } from './r186-routing.module';
import { R186Component } from './r186.component';


@NgModule({
  declarations: [R186Component],
  imports: [
    CommonModule,
    R186RoutingModule
  ]
})
export class R186Module { }
