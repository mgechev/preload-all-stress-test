import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R128Component } from './r128.component';

const routes: Routes = [{ path: '', component: R128Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R128RoutingModule { }
