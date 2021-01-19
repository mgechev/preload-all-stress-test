import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R308Component } from './r308.component';

const routes: Routes = [{ path: '', component: R308Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R308RoutingModule { }
