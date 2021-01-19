import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R75RoutingModule } from './r75-routing.module';
import { R75Component } from './r75.component';


@NgModule({
  declarations: [R75Component],
  imports: [
    CommonModule,
    R75RoutingModule
  ]
})
export class R75Module { }
