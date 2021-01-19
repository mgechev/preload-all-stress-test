import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R463Component } from './r463.component';

const routes: Routes = [{ path: '', component: R463Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R463RoutingModule { }
