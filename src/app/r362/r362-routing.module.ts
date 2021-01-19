import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R362Component } from './r362.component';

const routes: Routes = [{ path: '', component: R362Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R362RoutingModule { }
