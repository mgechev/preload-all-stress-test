import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R80RoutingModule } from './r80-routing.module';
import { R80Component } from './r80.component';


@NgModule({
  declarations: [R80Component],
  imports: [
    CommonModule,
    R80RoutingModule
  ]
})
export class R80Module { }
