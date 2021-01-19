import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R78RoutingModule } from './r78-routing.module';
import { R78Component } from './r78.component';


@NgModule({
  declarations: [R78Component],
  imports: [
    CommonModule,
    R78RoutingModule
  ]
})
export class R78Module { }
