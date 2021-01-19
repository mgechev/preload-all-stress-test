import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R260Component } from './r260.component';

const routes: Routes = [{ path: '', component: R260Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R260RoutingModule { }
