import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R33Component } from './r33.component';

const routes: Routes = [{ path: '', component: R33Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R33RoutingModule { }
