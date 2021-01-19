import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R402RoutingModule } from './r402-routing.module';
import { R402Component } from './r402.component';


@NgModule({
  declarations: [R402Component],
  imports: [
    CommonModule,
    R402RoutingModule
  ]
})
export class R402Module { }
