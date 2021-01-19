import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R103Component } from './r103.component';

const routes: Routes = [{ path: '', component: R103Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R103RoutingModule { }
