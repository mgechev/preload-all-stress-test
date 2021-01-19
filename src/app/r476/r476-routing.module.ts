import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R476Component } from './r476.component';

const routes: Routes = [{ path: '', component: R476Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R476RoutingModule { }
