import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R345Component } from './r345.component';

const routes: Routes = [{ path: '', component: R345Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R345RoutingModule { }
