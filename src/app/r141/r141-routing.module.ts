import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R141Component } from './r141.component';

const routes: Routes = [{ path: '', component: R141Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R141RoutingModule { }
