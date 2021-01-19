import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R63Component } from './r63.component';

const routes: Routes = [{ path: '', component: R63Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R63RoutingModule { }
