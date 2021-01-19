import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R325Component } from './r325.component';

const routes: Routes = [{ path: '', component: R325Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R325RoutingModule { }
