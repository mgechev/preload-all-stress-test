import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R25Component } from './r25.component';

const routes: Routes = [{ path: '', component: R25Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R25RoutingModule { }
