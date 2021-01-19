import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R135Component } from './r135.component';

const routes: Routes = [{ path: '', component: R135Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R135RoutingModule { }
