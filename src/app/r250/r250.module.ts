import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R250RoutingModule } from './r250-routing.module';
import { R250Component } from './r250.component';


@NgModule({
  declarations: [R250Component],
  imports: [
    CommonModule,
    R250RoutingModule
  ]
})
export class R250Module { }
