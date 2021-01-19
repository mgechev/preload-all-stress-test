import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R29Component } from './r29.component';

const routes: Routes = [{ path: '', component: R29Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R29RoutingModule { }
