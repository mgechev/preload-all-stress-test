import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R415Component } from './r415.component';

const routes: Routes = [{ path: '', component: R415Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R415RoutingModule { }
