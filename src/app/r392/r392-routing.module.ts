import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R392Component } from './r392.component';

const routes: Routes = [{ path: '', component: R392Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R392RoutingModule { }
