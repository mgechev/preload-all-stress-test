import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R350Component } from './r350.component';

const routes: Routes = [{ path: '', component: R350Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R350RoutingModule { }
