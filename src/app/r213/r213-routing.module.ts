import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R213Component } from './r213.component';

const routes: Routes = [{ path: '', component: R213Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R213RoutingModule { }
