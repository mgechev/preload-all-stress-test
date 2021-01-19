import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R86Component } from './r86.component';

const routes: Routes = [{ path: '', component: R86Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R86RoutingModule { }
