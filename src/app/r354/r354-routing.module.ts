import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R354Component } from './r354.component';

const routes: Routes = [{ path: '', component: R354Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R354RoutingModule { }
