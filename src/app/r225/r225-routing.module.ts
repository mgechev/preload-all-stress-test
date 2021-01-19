import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R225Component } from './r225.component';

const routes: Routes = [{ path: '', component: R225Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R225RoutingModule { }
