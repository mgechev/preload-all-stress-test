import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R11Component } from './r11.component';

const routes: Routes = [{ path: '', component: R11Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R11RoutingModule { }
