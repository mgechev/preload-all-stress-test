import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R254Component } from './r254.component';

const routes: Routes = [{ path: '', component: R254Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R254RoutingModule { }
