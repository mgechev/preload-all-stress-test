import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R202Component } from './r202.component';

const routes: Routes = [{ path: '', component: R202Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R202RoutingModule { }
