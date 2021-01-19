import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R450RoutingModule } from './r450-routing.module';
import { R450Component } from './r450.component';


@NgModule({
  declarations: [R450Component],
  imports: [
    CommonModule,
    R450RoutingModule
  ]
})
export class R450Module { }
