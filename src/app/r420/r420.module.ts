import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R420RoutingModule } from './r420-routing.module';
import { R420Component } from './r420.component';


@NgModule({
  declarations: [R420Component],
  imports: [
    CommonModule,
    R420RoutingModule
  ]
})
export class R420Module { }
