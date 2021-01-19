import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R337Component } from './r337.component';

const routes: Routes = [{ path: '', component: R337Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R337RoutingModule { }
