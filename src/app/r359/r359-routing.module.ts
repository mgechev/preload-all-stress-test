import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R359Component } from './r359.component';

const routes: Routes = [{ path: '', component: R359Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R359RoutingModule { }
