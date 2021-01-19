import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R210Component } from './r210.component';

const routes: Routes = [{ path: '', component: R210Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R210RoutingModule { }
