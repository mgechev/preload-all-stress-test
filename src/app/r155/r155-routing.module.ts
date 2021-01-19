import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R155Component } from './r155.component';

const routes: Routes = [{ path: '', component: R155Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R155RoutingModule { }
