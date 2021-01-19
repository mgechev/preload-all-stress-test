import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R366Component } from './r366.component';

const routes: Routes = [{ path: '', component: R366Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R366RoutingModule { }
