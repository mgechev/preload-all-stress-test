import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R269Component } from './r269.component';

const routes: Routes = [{ path: '', component: R269Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R269RoutingModule { }
