import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R315Component } from './r315.component';

const routes: Routes = [{ path: '', component: R315Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R315RoutingModule { }
