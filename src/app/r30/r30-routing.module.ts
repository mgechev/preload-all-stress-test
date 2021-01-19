import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R30Component } from './r30.component';

const routes: Routes = [{ path: '', component: R30Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R30RoutingModule { }
