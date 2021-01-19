import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R55Component } from './r55.component';

const routes: Routes = [{ path: '', component: R55Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R55RoutingModule { }
