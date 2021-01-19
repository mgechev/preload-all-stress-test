import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R138Component } from './r138.component';

const routes: Routes = [{ path: '', component: R138Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R138RoutingModule { }
