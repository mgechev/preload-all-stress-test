import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R23Component } from './r23.component';

const routes: Routes = [{ path: '', component: R23Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R23RoutingModule { }
