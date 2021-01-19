import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R214Component } from './r214.component';

const routes: Routes = [{ path: '', component: R214Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R214RoutingModule { }
