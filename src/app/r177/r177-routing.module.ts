import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R177Component } from './r177.component';

const routes: Routes = [{ path: '', component: R177Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R177RoutingModule { }
