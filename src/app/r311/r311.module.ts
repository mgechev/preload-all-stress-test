import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R311RoutingModule } from './r311-routing.module';
import { R311Component } from './r311.component';


@NgModule({
  declarations: [R311Component],
  imports: [
    CommonModule,
    R311RoutingModule
  ]
})
export class R311Module { }
