import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R163Component } from './r163.component';

const routes: Routes = [{ path: '', component: R163Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R163RoutingModule { }
