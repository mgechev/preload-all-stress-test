import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R88Component } from './r88.component';

const routes: Routes = [{ path: '', component: R88Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R88RoutingModule { }
