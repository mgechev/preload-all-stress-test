import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R249Component } from './r249.component';

const routes: Routes = [{ path: '', component: R249Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R249RoutingModule { }
