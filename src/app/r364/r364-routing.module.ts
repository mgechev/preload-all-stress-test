import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R364Component } from './r364.component';

const routes: Routes = [{ path: '', component: R364Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R364RoutingModule { }
