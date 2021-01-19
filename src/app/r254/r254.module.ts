import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R254RoutingModule } from './r254-routing.module';
import { R254Component } from './r254.component';


@NgModule({
  declarations: [R254Component],
  imports: [
    CommonModule,
    R254RoutingModule
  ]
})
export class R254Module { }
