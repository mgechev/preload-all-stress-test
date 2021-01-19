import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R180Component } from './r180.component';

const routes: Routes = [{ path: '', component: R180Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R180RoutingModule { }
