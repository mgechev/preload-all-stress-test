import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R349Component } from './r349.component';

const routes: Routes = [{ path: '', component: R349Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R349RoutingModule { }
