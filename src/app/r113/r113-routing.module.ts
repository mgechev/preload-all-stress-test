import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R113Component } from './r113.component';

const routes: Routes = [{ path: '', component: R113Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R113RoutingModule { }
