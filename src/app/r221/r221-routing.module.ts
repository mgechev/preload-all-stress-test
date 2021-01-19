import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R221Component } from './r221.component';

const routes: Routes = [{ path: '', component: R221Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R221RoutingModule { }
