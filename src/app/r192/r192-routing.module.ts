import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R192Component } from './r192.component';

const routes: Routes = [{ path: '', component: R192Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R192RoutingModule { }
