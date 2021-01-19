import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R393Component } from './r393.component';

const routes: Routes = [{ path: '', component: R393Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R393RoutingModule { }
