import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R309Component } from './r309.component';

const routes: Routes = [{ path: '', component: R309Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R309RoutingModule { }
