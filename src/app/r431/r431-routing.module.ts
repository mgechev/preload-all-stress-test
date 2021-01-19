import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R431Component } from './r431.component';

const routes: Routes = [{ path: '', component: R431Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R431RoutingModule { }
