import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R310Component } from './r310.component';

const routes: Routes = [{ path: '', component: R310Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R310RoutingModule { }
