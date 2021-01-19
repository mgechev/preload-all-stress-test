import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R161RoutingModule } from './r161-routing.module';
import { R161Component } from './r161.component';


@NgModule({
  declarations: [R161Component],
  imports: [
    CommonModule,
    R161RoutingModule
  ]
})
export class R161Module { }
