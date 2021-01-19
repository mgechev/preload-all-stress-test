import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R75Component } from './r75.component';

const routes: Routes = [{ path: '', component: R75Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R75RoutingModule { }
