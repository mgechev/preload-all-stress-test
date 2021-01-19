import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R173Component } from './r173.component';

const routes: Routes = [{ path: '', component: R173Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R173RoutingModule { }
