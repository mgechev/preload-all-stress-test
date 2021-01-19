import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R328Component } from './r328.component';

const routes: Routes = [{ path: '', component: R328Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R328RoutingModule { }
