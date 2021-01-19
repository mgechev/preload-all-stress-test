import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R92Component } from './r92.component';

const routes: Routes = [{ path: '', component: R92Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R92RoutingModule { }
