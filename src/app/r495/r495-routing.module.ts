import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R495Component } from './r495.component';

const routes: Routes = [{ path: '', component: R495Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R495RoutingModule { }
