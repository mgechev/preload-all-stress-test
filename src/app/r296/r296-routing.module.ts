import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R296Component } from './r296.component';

const routes: Routes = [{ path: '', component: R296Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R296RoutingModule { }
