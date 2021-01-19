import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R441Component } from './r441.component';

const routes: Routes = [{ path: '', component: R441Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R441RoutingModule { }
