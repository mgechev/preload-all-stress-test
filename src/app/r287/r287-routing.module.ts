import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R287Component } from './r287.component';

const routes: Routes = [{ path: '', component: R287Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R287RoutingModule { }
