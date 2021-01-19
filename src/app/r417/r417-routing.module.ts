import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R417Component } from './r417.component';

const routes: Routes = [{ path: '', component: R417Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R417RoutingModule { }
