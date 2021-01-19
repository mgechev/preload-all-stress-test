import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R17Component } from './r17.component';

const routes: Routes = [{ path: '', component: R17Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R17RoutingModule { }
