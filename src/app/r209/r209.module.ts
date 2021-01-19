import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R209RoutingModule } from './r209-routing.module';
import { R209Component } from './r209.component';


@NgModule({
  declarations: [R209Component],
  imports: [
    CommonModule,
    R209RoutingModule
  ]
})
export class R209Module { }
