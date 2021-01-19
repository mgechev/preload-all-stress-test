import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R134RoutingModule } from './r134-routing.module';
import { R134Component } from './r134.component';


@NgModule({
  declarations: [R134Component],
  imports: [
    CommonModule,
    R134RoutingModule
  ]
})
export class R134Module { }
