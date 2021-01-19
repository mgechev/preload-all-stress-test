import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R477Component } from './r477.component';

const routes: Routes = [{ path: '', component: R477Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R477RoutingModule { }
