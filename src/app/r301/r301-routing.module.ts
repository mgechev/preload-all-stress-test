import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R301Component } from './r301.component';

const routes: Routes = [{ path: '', component: R301Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R301RoutingModule { }
