import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R207RoutingModule } from './r207-routing.module';
import { R207Component } from './r207.component';


@NgModule({
  declarations: [R207Component],
  imports: [
    CommonModule,
    R207RoutingModule
  ]
})
export class R207Module { }
