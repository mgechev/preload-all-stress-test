import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R264Component } from './r264.component';

const routes: Routes = [{ path: '', component: R264Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R264RoutingModule { }
