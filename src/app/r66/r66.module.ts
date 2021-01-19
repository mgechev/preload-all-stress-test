import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R66RoutingModule } from './r66-routing.module';
import { R66Component } from './r66.component';


@NgModule({
  declarations: [R66Component],
  imports: [
    CommonModule,
    R66RoutingModule
  ]
})
export class R66Module { }
