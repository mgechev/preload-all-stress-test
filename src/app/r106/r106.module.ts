import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R106RoutingModule } from './r106-routing.module';
import { R106Component } from './r106.component';


@NgModule({
  declarations: [R106Component],
  imports: [
    CommonModule,
    R106RoutingModule
  ]
})
export class R106Module { }
