import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R237Component } from './r237.component';

const routes: Routes = [{ path: '', component: R237Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R237RoutingModule { }
