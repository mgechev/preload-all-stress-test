import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R281Component } from './r281.component';

const routes: Routes = [{ path: '', component: R281Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R281RoutingModule { }
