import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R223Component } from './r223.component';

const routes: Routes = [{ path: '', component: R223Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R223RoutingModule { }
