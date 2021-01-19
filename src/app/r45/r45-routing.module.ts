import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R45Component } from './r45.component';

const routes: Routes = [{ path: '', component: R45Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R45RoutingModule { }
