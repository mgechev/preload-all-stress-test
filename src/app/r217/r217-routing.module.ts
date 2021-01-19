import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R217Component } from './r217.component';

const routes: Routes = [{ path: '', component: R217Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R217RoutingModule { }
