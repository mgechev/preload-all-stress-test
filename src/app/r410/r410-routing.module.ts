import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R410Component } from './r410.component';

const routes: Routes = [{ path: '', component: R410Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R410RoutingModule { }
