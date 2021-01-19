import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R127Component } from './r127.component';

const routes: Routes = [{ path: '', component: R127Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R127RoutingModule { }
