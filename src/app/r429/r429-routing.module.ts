import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R429Component } from './r429.component';

const routes: Routes = [{ path: '', component: R429Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R429RoutingModule { }
