import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R368RoutingModule } from './r368-routing.module';
import { R368Component } from './r368.component';


@NgModule({
  declarations: [R368Component],
  imports: [
    CommonModule,
    R368RoutingModule
  ]
})
export class R368Module { }
