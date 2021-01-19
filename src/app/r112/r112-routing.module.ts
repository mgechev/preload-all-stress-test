import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R112Component } from './r112.component';

const routes: Routes = [{ path: '', component: R112Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R112RoutingModule { }
