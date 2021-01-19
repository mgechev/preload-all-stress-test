import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R259Component } from './r259.component';

const routes: Routes = [{ path: '', component: R259Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R259RoutingModule { }
