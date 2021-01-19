import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R361Component } from './r361.component';

const routes: Routes = [{ path: '', component: R361Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R361RoutingModule { }
