import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R175Component } from './r175.component';

const routes: Routes = [{ path: '', component: R175Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R175RoutingModule { }
