import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R482Component } from './r482.component';

const routes: Routes = [{ path: '', component: R482Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R482RoutingModule { }
