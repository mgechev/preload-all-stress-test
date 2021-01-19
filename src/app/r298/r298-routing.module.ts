import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R298Component } from './r298.component';

const routes: Routes = [{ path: '', component: R298Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R298RoutingModule { }
