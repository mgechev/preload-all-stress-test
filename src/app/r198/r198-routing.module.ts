import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R198Component } from './r198.component';

const routes: Routes = [{ path: '', component: R198Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R198RoutingModule { }
