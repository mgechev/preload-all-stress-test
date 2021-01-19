import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R316Component } from './r316.component';

const routes: Routes = [{ path: '', component: R316Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R316RoutingModule { }
