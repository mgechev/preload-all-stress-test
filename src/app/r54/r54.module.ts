import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { R54RoutingModule } from './r54-routing.module';
import { R54Component } from './r54.component';


@NgModule({
  declarations: [R54Component],
  imports: [
    CommonModule,
    R54RoutingModule
  ]
})
export class R54Module { }
