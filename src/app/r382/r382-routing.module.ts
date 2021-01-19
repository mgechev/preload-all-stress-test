import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R382Component } from './r382.component';

const routes: Routes = [{ path: '', component: R382Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R382RoutingModule { }
