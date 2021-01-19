import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R38Component } from './r38.component';

const routes: Routes = [{ path: '', component: R38Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R38RoutingModule { }
