import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R351Component } from './r351.component';

const routes: Routes = [{ path: '', component: R351Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R351RoutingModule { }
