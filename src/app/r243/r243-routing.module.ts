import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R243Component } from './r243.component';

const routes: Routes = [{ path: '', component: R243Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R243RoutingModule { }
