import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R116Component } from './r116.component';

const routes: Routes = [{ path: '', component: R116Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R116RoutingModule { }
