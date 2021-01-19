import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R115RoutingModule } from './r115-routing.module';
import { R115Component } from './r115.component';


@NgModule({
  declarations: [R115Component],
  imports: [
    CommonModule,
    R115RoutingModule
  ]
})
export class R115Module { }
