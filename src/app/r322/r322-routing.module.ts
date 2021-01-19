import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R322Component } from './r322.component';

const routes: Routes = [{ path: '', component: R322Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R322RoutingModule { }
