import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R381RoutingModule } from './r381-routing.module';
import { R381Component } from './r381.component';


@NgModule({
  declarations: [R381Component],
  imports: [
    CommonModule,
    R381RoutingModule
  ]
})
export class R381Module { }
