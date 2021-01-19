import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R211Component } from './r211.component';

const routes: Routes = [{ path: '', component: R211Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R211RoutingModule { }
