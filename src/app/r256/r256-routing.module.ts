import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R256Component } from './r256.component';

const routes: Routes = [{ path: '', component: R256Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R256RoutingModule { }
