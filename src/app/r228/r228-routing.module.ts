import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R228Component } from './r228.component';

const routes: Routes = [{ path: '', component: R228Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R228RoutingModule { }
