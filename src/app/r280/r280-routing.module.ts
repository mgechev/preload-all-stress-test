import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R280Component } from './r280.component';

const routes: Routes = [{ path: '', component: R280Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R280RoutingModule { }
