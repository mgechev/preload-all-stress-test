import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R445Component } from './r445.component';

const routes: Routes = [{ path: '', component: R445Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R445RoutingModule { }
