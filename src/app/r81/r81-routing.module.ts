import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R81Component } from './r81.component';

const routes: Routes = [{ path: '', component: R81Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R81RoutingModule { }
