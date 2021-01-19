import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R129Component } from './r129.component';

const routes: Routes = [{ path: '', component: R129Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R129RoutingModule { }
