import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R73RoutingModule } from './r73-routing.module';
import { R73Component } from './r73.component';


@NgModule({
  declarations: [R73Component],
  imports: [
    CommonModule,
    R73RoutingModule
  ]
})
export class R73Module { }
