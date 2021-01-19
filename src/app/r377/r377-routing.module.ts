import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R377Component } from './r377.component';

const routes: Routes = [{ path: '', component: R377Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R377RoutingModule { }
