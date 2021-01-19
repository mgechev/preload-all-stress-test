import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R245Component } from './r245.component';

const routes: Routes = [{ path: '', component: R245Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R245RoutingModule { }
