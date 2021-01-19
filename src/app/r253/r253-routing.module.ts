import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R253Component } from './r253.component';

const routes: Routes = [{ path: '', component: R253Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R253RoutingModule { }
