import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R244Component } from './r244.component';

const routes: Routes = [{ path: '', component: R244Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R244RoutingModule { }
