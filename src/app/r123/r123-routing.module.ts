import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R123Component } from './r123.component';

const routes: Routes = [{ path: '', component: R123Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R123RoutingModule { }
