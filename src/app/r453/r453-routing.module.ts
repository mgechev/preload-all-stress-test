import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R453Component } from './r453.component';

const routes: Routes = [{ path: '', component: R453Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R453RoutingModule { }
