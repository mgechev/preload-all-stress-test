import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R124Component } from './r124.component';

const routes: Routes = [{ path: '', component: R124Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R124RoutingModule { }
