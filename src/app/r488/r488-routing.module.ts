import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R488Component } from './r488.component';

const routes: Routes = [{ path: '', component: R488Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R488RoutingModule { }
