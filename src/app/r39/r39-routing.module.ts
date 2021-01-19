import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R39Component } from './r39.component';

const routes: Routes = [{ path: '', component: R39Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R39RoutingModule { }
