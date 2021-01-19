import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R320Component } from './r320.component';

const routes: Routes = [{ path: '', component: R320Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R320RoutingModule { }
