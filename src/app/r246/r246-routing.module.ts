import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R246Component } from './r246.component';

const routes: Routes = [{ path: '', component: R246Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R246RoutingModule { }
