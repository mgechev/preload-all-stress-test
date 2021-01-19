import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R478Component } from './r478.component';

const routes: Routes = [{ path: '', component: R478Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R478RoutingModule { }
