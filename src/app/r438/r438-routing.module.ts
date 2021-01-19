import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R438Component } from './r438.component';

const routes: Routes = [{ path: '', component: R438Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R438RoutingModule { }
