import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R484Component } from './r484.component';

const routes: Routes = [{ path: '', component: R484Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R484RoutingModule { }
