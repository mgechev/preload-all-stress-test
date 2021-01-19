import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R387Component } from './r387.component';

const routes: Routes = [{ path: '', component: R387Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R387RoutingModule { }
