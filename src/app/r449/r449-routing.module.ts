import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R449Component } from './r449.component';

const routes: Routes = [{ path: '', component: R449Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R449RoutingModule { }
