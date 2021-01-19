import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R327Component } from './r327.component';

const routes: Routes = [{ path: '', component: R327Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R327RoutingModule { }
