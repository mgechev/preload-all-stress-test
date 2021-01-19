import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R52Component } from './r52.component';

const routes: Routes = [{ path: '', component: R52Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R52RoutingModule { }
