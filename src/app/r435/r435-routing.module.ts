import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R435Component } from './r435.component';

const routes: Routes = [{ path: '', component: R435Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R435RoutingModule { }
