import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R24Component } from './r24.component';

const routes: Routes = [{ path: '', component: R24Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R24RoutingModule { }
