import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R72RoutingModule } from './r72-routing.module';
import { R72Component } from './r72.component';


@NgModule({
  declarations: [R72Component],
  imports: [
    CommonModule,
    R72RoutingModule
  ]
})
export class R72Module { }
