import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R109Component } from './r109.component';

const routes: Routes = [{ path: '', component: R109Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R109RoutingModule { }
