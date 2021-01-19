import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R435RoutingModule } from './r435-routing.module';
import { R435Component } from './r435.component';


@NgModule({
  declarations: [R435Component],
  imports: [
    CommonModule,
    R435RoutingModule
  ]
})
export class R435Module { }
