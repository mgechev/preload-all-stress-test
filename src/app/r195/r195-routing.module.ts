import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R195Component } from './r195.component';

const routes: Routes = [{ path: '', component: R195Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R195RoutingModule { }
