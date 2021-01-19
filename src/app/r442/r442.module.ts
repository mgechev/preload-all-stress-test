import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R442RoutingModule } from './r442-routing.module';
import { R442Component } from './r442.component';


@NgModule({
  declarations: [R442Component],
  imports: [
    CommonModule,
    R442RoutingModule
  ]
})
export class R442Module { }
