import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R42Component } from './r42.component';

const routes: Routes = [{ path: '', component: R42Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R42RoutingModule { }
