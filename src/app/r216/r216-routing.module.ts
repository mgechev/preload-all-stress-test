import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R216Component } from './r216.component';

const routes: Routes = [{ path: '', component: R216Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R216RoutingModule { }
