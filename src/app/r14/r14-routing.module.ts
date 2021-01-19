import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R14Component } from './r14.component';

const routes: Routes = [{ path: '', component: R14Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R14RoutingModule { }
