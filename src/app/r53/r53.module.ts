import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R53RoutingModule } from './r53-routing.module';
import { R53Component } from './r53.component';


@NgModule({
  declarations: [R53Component],
  imports: [
    CommonModule,
    R53RoutingModule
  ]
})
export class R53Module { }
