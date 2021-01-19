import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R86RoutingModule } from './r86-routing.module';
import { R86Component } from './r86.component';


@NgModule({
  declarations: [R86Component],
  imports: [
    CommonModule,
    R86RoutingModule
  ]
})
export class R86Module { }
