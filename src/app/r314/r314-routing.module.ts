import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R314Component } from './r314.component';

const routes: Routes = [{ path: '', component: R314Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R314RoutingModule { }
