import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R98Component } from './r98.component';

const routes: Routes = [{ path: '', component: R98Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R98RoutingModule { }
