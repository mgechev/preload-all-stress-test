import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R132Component } from './r132.component';

const routes: Routes = [{ path: '', component: R132Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R132RoutingModule { }
