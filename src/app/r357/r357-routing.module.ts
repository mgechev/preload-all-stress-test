import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R357Component } from './r357.component';

const routes: Routes = [{ path: '', component: R357Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R357RoutingModule { }
