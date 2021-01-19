import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R239Component } from './r239.component';

const routes: Routes = [{ path: '', component: R239Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R239RoutingModule { }
