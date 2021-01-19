import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R403Component } from './r403.component';

const routes: Routes = [{ path: '', component: R403Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R403RoutingModule { }
