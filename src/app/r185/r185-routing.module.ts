import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R185Component } from './r185.component';

const routes: Routes = [{ path: '', component: R185Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R185RoutingModule { }
