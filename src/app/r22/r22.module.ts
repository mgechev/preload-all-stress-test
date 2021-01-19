import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R22RoutingModule } from './r22-routing.module';
import { R22Component } from './r22.component';


@NgModule({
  declarations: [R22Component],
  imports: [
    CommonModule,
    R22RoutingModule
  ]
})
export class R22Module { }
