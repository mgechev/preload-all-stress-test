import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R312Component } from './r312.component';

const routes: Routes = [{ path: '', component: R312Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R312RoutingModule { }
