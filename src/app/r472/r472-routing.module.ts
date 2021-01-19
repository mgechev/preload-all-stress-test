import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R472Component } from './r472.component';

const routes: Routes = [{ path: '', component: R472Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R472RoutingModule { }
