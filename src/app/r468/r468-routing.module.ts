import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R468Component } from './r468.component';

const routes: Routes = [{ path: '', component: R468Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R468RoutingModule { }
