import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R304RoutingModule } from './r304-routing.module';
import { R304Component } from './r304.component';


@NgModule({
  declarations: [R304Component],
  imports: [
    CommonModule,
    R304RoutingModule
  ]
})
export class R304Module { }
