import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R58Component } from './r58.component';

const routes: Routes = [{ path: '', component: R58Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R58RoutingModule { }
