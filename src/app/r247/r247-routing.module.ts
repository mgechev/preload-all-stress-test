import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R247Component } from './r247.component';

const routes: Routes = [{ path: '', component: R247Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R247RoutingModule { }
