import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R433Component } from './r433.component';

const routes: Routes = [{ path: '', component: R433Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R433RoutingModule { }
