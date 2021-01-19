import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R222Component } from './r222.component';

const routes: Routes = [{ path: '', component: R222Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R222RoutingModule { }
