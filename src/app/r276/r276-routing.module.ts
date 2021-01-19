import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R276Component } from './r276.component';

const routes: Routes = [{ path: '', component: R276Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R276RoutingModule { }
