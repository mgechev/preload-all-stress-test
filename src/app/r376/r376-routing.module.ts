import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R376Component } from './r376.component';

const routes: Routes = [{ path: '', component: R376Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R376RoutingModule { }
