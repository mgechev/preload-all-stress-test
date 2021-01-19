import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R469Component } from './r469.component';

const routes: Routes = [{ path: '', component: R469Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R469RoutingModule { }
