import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R346Component } from './r346.component';

const routes: Routes = [{ path: '', component: R346Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R346RoutingModule { }
