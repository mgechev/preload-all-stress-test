import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R146Component } from './r146.component';

const routes: Routes = [{ path: '', component: R146Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R146RoutingModule { }
