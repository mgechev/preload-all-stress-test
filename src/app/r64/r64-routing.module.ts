import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R64Component } from './r64.component';

const routes: Routes = [{ path: '', component: R64Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R64RoutingModule { }
