import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R91Component } from './r91.component';

const routes: Routes = [{ path: '', component: R91Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R91RoutingModule { }
