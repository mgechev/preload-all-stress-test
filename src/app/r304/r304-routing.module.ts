import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R304Component } from './r304.component';

const routes: Routes = [{ path: '', component: R304Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R304RoutingModule { }
