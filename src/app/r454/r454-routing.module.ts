import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R454Component } from './r454.component';

const routes: Routes = [{ path: '', component: R454Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R454RoutingModule { }
