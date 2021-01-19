import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R142Component } from './r142.component';

const routes: Routes = [{ path: '', component: R142Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R142RoutingModule { }
