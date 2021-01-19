import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R137RoutingModule } from './r137-routing.module';
import { R137Component } from './r137.component';


@NgModule({
  declarations: [R137Component],
  imports: [
    CommonModule,
    R137RoutingModule
  ]
})
export class R137Module { }
