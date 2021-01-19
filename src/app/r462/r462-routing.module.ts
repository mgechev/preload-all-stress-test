import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R462Component } from './r462.component';

const routes: Routes = [{ path: '', component: R462Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R462RoutingModule { }
