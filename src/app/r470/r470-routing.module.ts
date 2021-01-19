import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R470Component } from './r470.component';

const routes: Routes = [{ path: '', component: R470Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R470RoutingModule { }
