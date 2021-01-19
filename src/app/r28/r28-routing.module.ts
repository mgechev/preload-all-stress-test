import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R28Component } from './r28.component';

const routes: Routes = [{ path: '', component: R28Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R28RoutingModule { }
