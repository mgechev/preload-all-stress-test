import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R219Component } from './r219.component';

const routes: Routes = [{ path: '', component: R219Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R219RoutingModule { }
