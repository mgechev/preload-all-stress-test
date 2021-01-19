import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R441RoutingModule } from './r441-routing.module';
import { R441Component } from './r441.component';


@NgModule({
  declarations: [R441Component],
  imports: [
    CommonModule,
    R441RoutingModule
  ]
})
export class R441Module { }
