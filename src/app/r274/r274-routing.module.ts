import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R274Component } from './r274.component';

const routes: Routes = [{ path: '', component: R274Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R274RoutingModule { }
