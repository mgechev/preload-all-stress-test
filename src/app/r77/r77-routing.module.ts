import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R77Component } from './r77.component';

const routes: Routes = [{ path: '', component: R77Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R77RoutingModule { }
