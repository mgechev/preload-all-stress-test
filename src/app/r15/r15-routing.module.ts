import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R15Component } from './r15.component';

const routes: Routes = [{ path: '', component: R15Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R15RoutingModule { }
