import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R218Component } from './r218.component';

const routes: Routes = [{ path: '', component: R218Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R218RoutingModule { }
