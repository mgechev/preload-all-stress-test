import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R386Component } from './r386.component';

const routes: Routes = [{ path: '', component: R386Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R386RoutingModule { }
