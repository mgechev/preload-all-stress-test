import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R7Component } from './r7.component';

const routes: Routes = [{ path: '', component: R7Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R7RoutingModule { }
