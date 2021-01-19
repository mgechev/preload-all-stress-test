import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R381Component } from './r381.component';

const routes: Routes = [{ path: '', component: R381Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R381RoutingModule { }
