import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R278Component } from './r278.component';

const routes: Routes = [{ path: '', component: R278Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R278RoutingModule { }
