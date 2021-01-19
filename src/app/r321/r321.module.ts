import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R321RoutingModule } from './r321-routing.module';
import { R321Component } from './r321.component';


@NgModule({
  declarations: [R321Component],
  imports: [
    CommonModule,
    R321RoutingModule
  ]
})
export class R321Module { }
