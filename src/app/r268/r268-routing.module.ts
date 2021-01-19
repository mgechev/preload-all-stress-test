import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R268Component } from './r268.component';

const routes: Routes = [{ path: '', component: R268Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R268RoutingModule { }
