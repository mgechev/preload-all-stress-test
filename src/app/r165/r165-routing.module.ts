import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R165Component } from './r165.component';

const routes: Routes = [{ path: '', component: R165Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R165RoutingModule { }
