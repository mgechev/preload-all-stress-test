import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R368Component } from './r368.component';

const routes: Routes = [{ path: '', component: R368Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R368RoutingModule { }
