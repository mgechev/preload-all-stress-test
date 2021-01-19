import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R321Component } from './r321.component';

const routes: Routes = [{ path: '', component: R321Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R321RoutingModule { }
