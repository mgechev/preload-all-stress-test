import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R203Component } from './r203.component';

const routes: Routes = [{ path: '', component: R203Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R203RoutingModule { }
