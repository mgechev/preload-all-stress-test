import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R373Component } from './r373.component';

const routes: Routes = [{ path: '', component: R373Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R373RoutingModule { }
