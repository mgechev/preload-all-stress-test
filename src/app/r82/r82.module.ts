import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R82RoutingModule } from './r82-routing.module';
import { R82Component } from './r82.component';


@NgModule({
  declarations: [R82Component],
  imports: [
    CommonModule,
    R82RoutingModule
  ]
})
export class R82Module { }
