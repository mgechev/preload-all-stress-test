import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R227Component } from './r227.component';

const routes: Routes = [{ path: '', component: R227Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R227RoutingModule { }
