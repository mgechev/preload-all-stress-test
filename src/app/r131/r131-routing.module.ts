import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R131Component } from './r131.component';

const routes: Routes = [{ path: '', component: R131Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R131RoutingModule { }
