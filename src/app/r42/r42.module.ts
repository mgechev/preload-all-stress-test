import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R42RoutingModule } from './r42-routing.module';
import { R42Component } from './r42.component';


@NgModule({
  declarations: [R42Component],
  imports: [
    CommonModule,
    R42RoutingModule
  ]
})
export class R42Module { }
