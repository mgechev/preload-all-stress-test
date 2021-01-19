import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R71Component } from './r71.component';

const routes: Routes = [{ path: '', component: R71Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R71RoutingModule { }
