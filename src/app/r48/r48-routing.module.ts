import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R48Component } from './r48.component';

const routes: Routes = [{ path: '', component: R48Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R48RoutingModule { }
