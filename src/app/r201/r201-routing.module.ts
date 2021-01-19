import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R201Component } from './r201.component';

const routes: Routes = [{ path: '', component: R201Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R201RoutingModule { }
