import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R426Component } from './r426.component';

const routes: Routes = [{ path: '', component: R426Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R426RoutingModule { }
