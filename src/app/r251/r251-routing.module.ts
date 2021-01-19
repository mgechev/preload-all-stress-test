import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R251Component } from './r251.component';

const routes: Routes = [{ path: '', component: R251Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R251RoutingModule { }
