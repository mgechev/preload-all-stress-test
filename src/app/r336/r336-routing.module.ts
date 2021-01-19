import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R336Component } from './r336.component';

const routes: Routes = [{ path: '', component: R336Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R336RoutingModule { }
