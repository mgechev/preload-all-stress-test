import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R427Component } from './r427.component';

const routes: Routes = [{ path: '', component: R427Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R427RoutingModule { }
