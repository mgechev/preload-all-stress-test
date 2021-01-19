import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R461Component } from './r461.component';

const routes: Routes = [{ path: '', component: R461Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R461RoutingModule { }
