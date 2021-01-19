import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R270RoutingModule } from './r270-routing.module';
import { R270Component } from './r270.component';


@NgModule({
  declarations: [R270Component],
  imports: [
    CommonModule,
    R270RoutingModule
  ]
})
export class R270Module { }
