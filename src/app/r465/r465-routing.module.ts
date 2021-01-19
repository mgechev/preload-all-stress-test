import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R465Component } from './r465.component';

const routes: Routes = [{ path: '', component: R465Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R465RoutingModule { }
