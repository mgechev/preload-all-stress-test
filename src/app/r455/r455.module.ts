import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R455RoutingModule } from './r455-routing.module';
import { R455Component } from './r455.component';


@NgModule({
  declarations: [R455Component],
  imports: [
    CommonModule,
    R455RoutingModule
  ]
})
export class R455Module { }
