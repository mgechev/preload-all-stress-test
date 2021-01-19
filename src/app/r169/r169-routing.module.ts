import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R169Component } from './r169.component';

const routes: Routes = [{ path: '', component: R169Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R169RoutingModule { }
