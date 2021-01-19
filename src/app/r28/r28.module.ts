import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R28RoutingModule } from './r28-routing.module';
import { R28Component } from './r28.component';


@NgModule({
  declarations: [R28Component],
  imports: [
    CommonModule,
    R28RoutingModule
  ]
})
export class R28Module { }
