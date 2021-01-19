import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R119Component } from './r119.component';

const routes: Routes = [{ path: '', component: R119Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R119RoutingModule { }
