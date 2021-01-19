import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R13Component } from './r13.component';

const routes: Routes = [{ path: '', component: R13Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R13RoutingModule { }
