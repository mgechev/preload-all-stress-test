import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R145Component } from './r145.component';

const routes: Routes = [{ path: '', component: R145Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R145RoutingModule { }
