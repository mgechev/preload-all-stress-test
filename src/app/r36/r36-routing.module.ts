import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R36Component } from './r36.component';

const routes: Routes = [{ path: '', component: R36Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R36RoutingModule { }
