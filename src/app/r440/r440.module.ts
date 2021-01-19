import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R440RoutingModule } from './r440-routing.module';
import { R440Component } from './r440.component';


@NgModule({
  declarations: [R440Component],
  imports: [
    CommonModule,
    R440RoutingModule
  ]
})
export class R440Module { }
