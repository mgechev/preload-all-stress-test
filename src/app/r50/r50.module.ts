import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R50RoutingModule } from './r50-routing.module';
import { R50Component } from './r50.component';


@NgModule({
  declarations: [R50Component],
  imports: [
    CommonModule,
    R50RoutingModule
  ]
})
export class R50Module { }
