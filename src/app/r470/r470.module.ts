import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R470RoutingModule } from './r470-routing.module';
import { R470Component } from './r470.component';


@NgModule({
  declarations: [R470Component],
  imports: [
    CommonModule,
    R470RoutingModule
  ]
})
export class R470Module { }
