import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R323Component } from './r323.component';

const routes: Routes = [{ path: '', component: R323Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R323RoutingModule { }
