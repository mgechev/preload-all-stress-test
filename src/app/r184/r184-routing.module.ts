import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R184Component } from './r184.component';

const routes: Routes = [{ path: '', component: R184Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R184RoutingModule { }
