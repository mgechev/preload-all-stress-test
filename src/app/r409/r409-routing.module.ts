import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R409Component } from './r409.component';

const routes: Routes = [{ path: '', component: R409Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R409RoutingModule { }
