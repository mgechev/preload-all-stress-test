import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R21Component } from './r21.component';

const routes: Routes = [{ path: '', component: R21Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R21RoutingModule { }
