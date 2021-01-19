import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R365Component } from './r365.component';

const routes: Routes = [{ path: '', component: R365Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R365RoutingModule { }
