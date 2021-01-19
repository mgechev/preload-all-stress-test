import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R67Component } from './r67.component';

const routes: Routes = [{ path: '', component: R67Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R67RoutingModule { }
