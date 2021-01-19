import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R347Component } from './r347.component';

const routes: Routes = [{ path: '', component: R347Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R347RoutingModule { }
