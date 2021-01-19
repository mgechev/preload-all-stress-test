import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R70Component } from './r70.component';

const routes: Routes = [{ path: '', component: R70Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R70RoutingModule { }
