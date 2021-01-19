import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R340RoutingModule } from './r340-routing.module';
import { R340Component } from './r340.component';


@NgModule({
  declarations: [R340Component],
  imports: [
    CommonModule,
    R340RoutingModule
  ]
})
export class R340Module { }
