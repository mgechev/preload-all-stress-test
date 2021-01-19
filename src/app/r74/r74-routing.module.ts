import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R74Component } from './r74.component';

const routes: Routes = [{ path: '', component: R74Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R74RoutingModule { }
