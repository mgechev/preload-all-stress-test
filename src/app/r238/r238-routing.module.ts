import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R238Component } from './r238.component';

const routes: Routes = [{ path: '', component: R238Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R238RoutingModule { }
