import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R425RoutingModule } from './r425-routing.module';
import { R425Component } from './r425.component';


@NgModule({
  declarations: [R425Component],
  imports: [
    CommonModule,
    R425RoutingModule
  ]
})
export class R425Module { }
