import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R482RoutingModule } from './r482-routing.module';
import { R482Component } from './r482.component';


@NgModule({
  declarations: [R482Component],
  imports: [
    CommonModule,
    R482RoutingModule
  ]
})
export class R482Module { }
