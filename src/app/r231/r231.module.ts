import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R231RoutingModule } from './r231-routing.module';
import { R231Component } from './r231.component';


@NgModule({
  declarations: [R231Component],
  imports: [
    CommonModule,
    R231RoutingModule
  ]
})
export class R231Module { }
