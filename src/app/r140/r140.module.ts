import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R140RoutingModule } from './r140-routing.module';
import { R140Component } from './r140.component';


@NgModule({
  declarations: [R140Component],
  imports: [
    CommonModule,
    R140RoutingModule
  ]
})
export class R140Module { }
