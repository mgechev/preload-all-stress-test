import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R31Component } from './r31.component';

const routes: Routes = [{ path: '', component: R31Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R31RoutingModule { }
