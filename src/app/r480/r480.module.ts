import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R480RoutingModule } from './r480-routing.module';
import { R480Component } from './r480.component';


@NgModule({
  declarations: [R480Component],
  imports: [
    CommonModule,
    R480RoutingModule
  ]
})
export class R480Module { }
