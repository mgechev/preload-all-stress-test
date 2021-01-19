import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R458Component } from './r458.component';

const routes: Routes = [{ path: '', component: R458Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R458RoutingModule { }
