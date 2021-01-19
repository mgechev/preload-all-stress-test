import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R115Component } from './r115.component';

const routes: Routes = [{ path: '', component: R115Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R115RoutingModule { }
