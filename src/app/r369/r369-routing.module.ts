import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R369Component } from './r369.component';

const routes: Routes = [{ path: '', component: R369Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R369RoutingModule { }
