import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R241Component } from './r241.component';

const routes: Routes = [{ path: '', component: R241Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R241RoutingModule { }
