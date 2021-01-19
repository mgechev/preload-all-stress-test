import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R19Component } from './r19.component';

const routes: Routes = [{ path: '', component: R19Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R19RoutingModule { }
