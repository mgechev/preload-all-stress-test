import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R329Component } from './r329.component';

const routes: Routes = [{ path: '', component: R329Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R329RoutingModule { }
