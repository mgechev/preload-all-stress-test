import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R102RoutingModule } from './r102-routing.module';
import { R102Component } from './r102.component';


@NgModule({
  declarations: [R102Component],
  imports: [
    CommonModule,
    R102RoutingModule
  ]
})
export class R102Module { }
