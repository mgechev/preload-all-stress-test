import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { R266Component } from './r266.component';

const routes: Routes = [{ path: '', component: R266Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class R266RoutingModule { }
