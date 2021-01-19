import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R332RoutingModule } from './r332-routing.module';
import { R332Component } from './r332.component';


@NgModule({
  declarations: [R332Component],
  imports: [
    CommonModule,
    R332RoutingModule
  ]
})
export class R332Module { }
