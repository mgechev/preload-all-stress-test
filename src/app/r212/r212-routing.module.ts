import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R212Component } from './r212.component';

const routes: Routes = [{ path: '', component: R212Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R212RoutingModule { }
