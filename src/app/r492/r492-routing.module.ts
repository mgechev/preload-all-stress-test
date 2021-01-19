import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R492Component } from './r492.component';

const routes: Routes = [{ path: '', component: R492Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R492RoutingModule { }
