import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R422Component } from './r422.component';

const routes: Routes = [{ path: '', component: R422Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R422RoutingModule { }
