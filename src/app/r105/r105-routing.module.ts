import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R105Component } from './r105.component';

const routes: Routes = [{ path: '', component: R105Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R105RoutingModule { }
