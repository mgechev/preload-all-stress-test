import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R174Component } from './r174.component';

const routes: Routes = [{ path: '', component: R174Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R174RoutingModule { }
