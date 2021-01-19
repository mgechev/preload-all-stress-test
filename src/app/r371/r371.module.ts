import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R371RoutingModule } from './r371-routing.module';
import { R371Component } from './r371.component';


@NgModule({
  declarations: [R371Component],
  imports: [
    CommonModule,
    R371RoutingModule
  ]
})
export class R371Module { }
