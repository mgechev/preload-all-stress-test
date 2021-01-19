import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R84Component } from './r84.component';

const routes: Routes = [{ path: '', component: R84Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R84RoutingModule { }
