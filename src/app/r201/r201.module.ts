import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R201RoutingModule } from './r201-routing.module';
import { R201Component } from './r201.component';


@NgModule({
  declarations: [R201Component],
  imports: [
    CommonModule,
    R201RoutingModule
  ]
})
export class R201Module { }
