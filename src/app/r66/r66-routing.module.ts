import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R66Component } from './r66.component';

const routes: Routes = [{ path: '', component: R66Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R66RoutingModule { }
