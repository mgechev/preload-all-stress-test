import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R367Component } from './r367.component';

const routes: Routes = [{ path: '', component: R367Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R367RoutingModule { }
