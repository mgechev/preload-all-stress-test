import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R139Component } from './r139.component';

const routes: Routes = [{ path: '', component: R139Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R139RoutingModule { }
