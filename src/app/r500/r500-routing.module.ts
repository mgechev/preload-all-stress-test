import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R500Component } from './r500.component';

const routes: Routes = [{ path: '', component: R500Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R500RoutingModule { }
