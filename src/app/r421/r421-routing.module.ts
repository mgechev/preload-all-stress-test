import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R421Component } from './r421.component';

const routes: Routes = [{ path: '', component: R421Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R421RoutingModule { }
