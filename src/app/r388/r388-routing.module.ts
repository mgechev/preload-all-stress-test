import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R388Component } from './r388.component';

const routes: Routes = [{ path: '', component: R388Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R388RoutingModule { }
