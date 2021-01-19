import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R102Component } from './r102.component';

const routes: Routes = [{ path: '', component: R102Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R102RoutingModule { }
