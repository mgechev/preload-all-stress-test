import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R242Component } from './r242.component';

const routes: Routes = [{ path: '', component: R242Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R242RoutingModule { }
