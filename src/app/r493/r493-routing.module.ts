import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R493Component } from './r493.component';

const routes: Routes = [{ path: '', component: R493Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R493RoutingModule { }
