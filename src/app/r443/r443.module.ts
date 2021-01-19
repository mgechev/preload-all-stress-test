import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R443RoutingModule } from './r443-routing.module';
import { R443Component } from './r443.component';


@NgModule({
  declarations: [R443Component],
  imports: [
    CommonModule,
    R443RoutingModule
  ]
})
export class R443Module { }
