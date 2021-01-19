import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R204Component } from './r204.component';

const routes: Routes = [{ path: '', component: R204Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R204RoutingModule { }
