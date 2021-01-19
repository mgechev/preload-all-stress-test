import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R181RoutingModule } from './r181-routing.module';
import { R181Component } from './r181.component';


@NgModule({
  declarations: [R181Component],
  imports: [
    CommonModule,
    R181RoutingModule
  ]
})
export class R181Module { }
