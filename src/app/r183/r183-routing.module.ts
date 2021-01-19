import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R183Component } from './r183.component';

const routes: Routes = [{ path: '', component: R183Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R183RoutingModule { }
