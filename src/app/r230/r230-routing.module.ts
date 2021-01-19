import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R230Component } from './r230.component';

const routes: Routes = [{ path: '', component: R230Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R230RoutingModule { }
