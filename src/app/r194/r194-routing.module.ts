import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R194Component } from './r194.component';

const routes: Routes = [{ path: '', component: R194Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R194RoutingModule { }
